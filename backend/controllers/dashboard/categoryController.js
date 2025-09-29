const { IncomingForm } = require("formidable");
const cloudinary = require("cloudinary").v2;
const { responseReturn } = require("../../utils/response");
const categoryModel = require("../../models/categoryModel");

class categoryController {
  add_category = async (req, res) => {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return responseReturn(res, 404, { error: "Something went wrong" });
      } else {
        let name = fields?.name?.[0] || "";
        name = name.trim();
        const slug = name.split(" ").join("-");
        const image = files?.image?.[0];

        if (!image) {
          return responseReturn(res, 400, { error: "No image uploaded" });
        }

        cloudinary.config({
          cloud_name: process.env.CLOUD_NAME,
          api_key: process.env.API_KEY,
          api_secret: process.env.API_SECRET,
          secure: true,
        });

        try {
          const result = await cloudinary.uploader.upload(image.filepath, {
            folder: "categories",
          });
          if (result) {
            const category = await categoryModel.create({
              name: name.toLowerCase(),
              slug: slug.toLowerCase(),
              image: result.url,
            });
            responseReturn(res, 201, {
              category,
              message: "Category added successfully",
            });
          } else {
            return responseReturn(res, 404, {
              error: "Image upload failed",
            });
          }
        } catch (error) {
          return responseReturn(res, 500, { error: "Internal server error" });
        }
      }
    });
  };

  get_category = async (req, res) => {
    const { page, searchQuery, perPage } = req.query;
    try {
      let skipPage = "";
      if (page && perPage) {
        skipPage = parseInt(perPage) * (parseInt(page) - 1);
      }

      if (searchQuery && page && perPage) {
        const categories = await categoryModel
          .find({
            $text: { $search: searchQuery },
          })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });

        const totalCategory = await categoryModel
          .find({
            $text: { $search: searchQuery },
          })
          .countDocuments();

        responseReturn(res, 200, { categories, totalCategory });
      } else if (searchQuery === "" && page && perPage) {
        const categories = await categoryModel
          .find({})
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });

        const totalCategory = await categoryModel.find({}).countDocuments();

        responseReturn(res, 200, { categories, totalCategory });
      } else {
        const categories = await categoryModel.find({}).sort({ createdAt: -1 });

        const totalCategory = await categoryModel.find({}).countDocuments();

        responseReturn(res, 200, { categories, totalCategory });
      }
    } catch (error) {
      return responseReturn(res, 501, { error: "Internal server error." });
    }
  };
}

module.exports = new categoryController();
