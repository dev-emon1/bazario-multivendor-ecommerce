import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FeatureProducts from "../components/products/FeatureProducts";
import Products from "../components/products/Products";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const Home = () => {
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
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Categories />
      <div className="py-[45px]">
        <FeatureProducts />
      </div>

      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7 w-full">
            <div className="overflow-hidden">
              {/* <Products /> */}
              <div className="my-8">
                <Carousel
                  autoPlay={true}
                  infinite={true}
                  arrows={true}
                  showDots={true}
                  responsive={responsive}
                >
                  {[1, 2, 3, 4, 5, 6].map((img, i) => (
                    <Link to="#" key={i}>
                      <img
                        src={`http://localhost:3000/images/banner/${img}.jpg`}
                        alt=""
                      />
                    </Link>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="overflow-hidden">
              <Products />
            </div>
            <div className="overflow-hidden">
              <Products />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
