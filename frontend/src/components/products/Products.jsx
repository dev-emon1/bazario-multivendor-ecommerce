import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const ButtonGroup = () => {};
  return (
    <div className="flex gap-8">
      {
        /* <Carousel
        autoPlay={true}
        infinite={true}
        arrows={true}
        transitionDuration={500}
        responsive={responsive} */
        // renderButtonGroupOutside={true}
        // customButtonGroup={<ButtonGroup />
        // >
        /* {products.map((p, i) => (
          <div className="flex flex-col justify-start gap-2" key={i}>
            {p.map((pl, j) => (
              <Link to="#" className="flex items-start justify-start" key={j}>
                <img
                  src={`http://localhost:3000/images/products/${pl}.webp`}
                  alt=""
                  className="w-28 h-28 object-cover"
                />
                <div className="px-3 flex justify-start items-center gap-1 flex-col text-slate-600">
                  <h2>Product Name</h2>
                  hello
                  <span>$542</span>
                </div>
              </Link>
            ))}
          </div>
        ))} */
        /* </Carousel> */
      }
    </div>
  );
};

export default Products;
