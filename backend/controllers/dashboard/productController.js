const { IncomingForm } = require("formidable");
const cloudinary = require("cloudinary").v2;
const { responseReturn } = require("../../utils/response");
const productModel = require("../../models/productModel");

class productController {
  add_product = async (req, res) => {
    const { id } = req;
    const form = new IncomingForm({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return responseReturn(res, 500, { error: err.message });
      }

      try {
        let name = fields?.name?.[0] || "";
        let category = fields?.category?.[0] || "";
        let brand = fields?.brand?.[0] || "";
        let price = fields?.price?.[0] || "0";
        let stock = fields?.stock?.[0] || "0";
        let discount = fields?.discount?.[0] || "0";
        let description = fields?.description?.[0] || "";
        let shopName = fields?.shopName?.[0] || "";

        name = name.trim();
        const slug = name.split(" ").join("-");

        // cloudinary config
        cloudinary.config({
          cloud_name: process.env.CLOUD_NAME,
          api_key: process.env.API_KEY,
          api_secret: process.env.API_SECRET,
          secure: true,
        });

        // image upload
        const images = files.images;
        let allImageUrl = [];
        for (let i = 0; i < images.length; i++) {
          const file = images[i];
          const result = await cloudinary.uploader.upload(file.filepath, {
            folder: "products",
          });
          allImageUrl.push(result.secure_url);
        }

        // database এ save
        await productModel.create({
          sellerId: id,
          name: name.toLowerCase(),
          slug: slug.toLowerCase(),
          category: category.toLowerCase(),
          brand: brand.toLowerCase(),
          price: parseInt(price),
          stock: parseInt(stock),
          discount: parseInt(discount),
          description: description.trim(),
          shopName: shopName.toLowerCase(),
          image: allImageUrl,
        });

        responseReturn(res, 201, { message: "Product added successfully" });
      } catch (error) {
        return responseReturn(res, 500, { error: error.message });
      }
    });
  };

  get_products = async (req, res) => {
    const { page, searchQuery, perPage } = req.query;
    const { id } = req;
    const skipPage = parseInt(perPage) * (parseInt(page) - 1);

    try {
      if (searchQuery) {
        const products = await productModel
          .find({
            $text: { $search: searchQuery },
            sellerId: id,
          })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });

        const totalProducts = await productModel
          .find({
            $text: { $search: searchQuery },
            sellerId: id,
          })
          .countDocuments();

        responseReturn(res, 200, { products, totalProducts });
      } else {
        const products = await productModel
          .find({ sellerId: id })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });

        const totalProducts = await productModel
          .find({ sellerId: id })
          .countDocuments();

        responseReturn(res, 200, { products, totalProducts });
      }
    } catch (error) {
      return responseReturn(res, 501, { error: "Internal server error." });
    }
  };

  get_editable_product = async (req, res) => {
    const { productId } = req.params;
    try {
      const product = await productModel.findById(productId);
      if (!product) {
        return responseReturn(res, 404, { error: "Product not found." });
      }
      return responseReturn(res, 200, { product });
    } catch (error) {
      return responseReturn(res, 501, { error: "Internal server error." });
    }
  };

  update_product = async (req, res) => {
    let { name, brand, price, stock, discount, description, productId } =
      req.body;
    name = name?.trim();
    const slug = name.split(" ").join("-");
    try {
      await productModel.findByIdAndUpdate(productId, {
        name: name?.toLowerCase(),
        slug: slug?.toLowerCase(),
        brand: brand?.toLowerCase(),
        price: parseInt(price),
        stock: parseInt(stock),
        discount: parseInt(discount),
        description: description?.trim(),
      });

      const product = await productModel.findById(productId);
      return responseReturn(res, 200, {
        product,
        message: "Product updated successfully",
      });
    } catch (error) {
      return responseReturn(res, 501, { error: "Internal server error." });
    }
  };
  update_product_images = async (req, res) => {
    const form = new IncomingForm({ multiples: true });

    try {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          return responseReturn(res, 500, { error: err.message });
        }

        try {
          const oldImage = fields.oldImage?.[0];
          const productId = fields.productId?.[0];
          const newImage = files.newImage?.[0];

          if (!newImage) {
            return responseReturn(res, 400, {
              error: "No image file received",
            });
          }

          // Cloudinary config
          cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
            secure: true,
          });

          // Upload new image
          const result = await cloudinary.uploader.upload(newImage.filepath, {
            folder: "products",
          });

          if (result?.secure_url) {
            // Find product
            let product = await productModel.findById(productId);
            if (!product) {
              return responseReturn(res, 404, { error: "Product not found" });
            }

            // Replace old image
            let images = [...product.image];
            const index = images.findIndex((img) => img === oldImage);

            if (index !== -1) {
              images[index] = result.secure_url;
            } else {
              images.push(result.secure_url);
            }

            await productModel.findByIdAndUpdate(productId, { image: images });
            product = await productModel.findById(productId);

            return responseReturn(res, 200, {
              product,
              message: "Product image updated successfully",
            });
          } else {
            return responseReturn(res, 500, {
              error: "Image upload failed.",
            });
          }
        } catch (error) {
          console.error("update_product_images error:", error);
          return responseReturn(res, 500, { error: error.message });
        }
      });
    } catch (error) {
      return responseReturn(res, 501, { error: "Internal server error." });
    }
  };
}

module.exports = new productController();
