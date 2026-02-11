import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    "Mobile Phones",
    "Laptops & Computers",
    "Sound accessories",
    "Women’s Clothing",
    "Foot Wear",
    "Men’s Clothing",
    "Watches",
    "Watches",
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
    mdtablet: { breakpoint: { max: 991, min: 464 }, items: 4 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
    smmobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
    xsmobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };
  return (
    <div className="w-[85%] relative mx-auto">
      <Carousel
        autoPlay={true}
        infinite={true}
        arrows={true}
        responsive={responsive}
        transitionDuration={500}
      >
        {categories.map((item, i) => (
          <Link to="#" key={i} className="h-[185px] block border">
            <div className="w-full h-full p-3">
              <img
                src={`http://localhost:3001/images/products/${i + 1}.webp`}
                alt=""
              />
              <div className="absolute w-full mx-auto bottom-6 left-0 flex justify-center items-center font-bold">
                <span className="py-[2px] px-6 bg-[#3330305d] text-white">
                  {item}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;
