import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const heroData = [
  {
    title: "Fresh Smoothie & Summer Juice",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/Images/HeroImg1.png",
    bg: "#1f2c2f",
    imgSize: "w-32 md:w-72",
  },
  {
    title: "Fresh Fruits & Veggies",
    description: "Get 20% off on locally sourced fruits and vegetables.",
    image: "/Images/HeroImg2.png",
    bg: "#14532d",
    imgSize: "w-60 md:w-90",
  },
  {
    title: "Hot & Fresh Coffee",
    description: "Brewed to perfection. Try our seasonal flavors!",
    image: "/Images/HeroImg3.png",
    bg: "#4b3621",
    imgSize: "w-60 md:w-60"
  },
];

const Hero = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="my-5"
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="text-white rounded-xl p-8 max-w-7xl mx-auto"
              style={{ backgroundColor: item.bg }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {/* Text */}
                <div>
                  <p className="text-yellow-400 text-lg font-semibold">
                    100% Natural
                  </p>
                  <h1 className="text-3xl md:text-5xl font-bold mt-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-300 mt-4 text-sm md:text-base">
                    {item.description}
                  </p>
                  <button className="mt-6 px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                    SHOP NOW
                  </button>
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end -mt-0.5 mr-14">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`${item.imgSize} object-contain drop-shadow-xl`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" flex flex-row justify-around my-5">
        <div className="bg-[#2f3e46] rounded-lg p-6 flex justify-between items-center  my-3 text-white w-xl">
          <div>
            <p className="text-lg font-light">10% Off</p>
            <p className="text-xs tracking-widest mt-1 mb-2">SALE</p>
            <h2 className="text-2xl font-bold leading-snug">Dairy Products</h2>
            <button className="mt-4 text-xl text-gray-300 hover:underline flex items-center gap-1">
              Shop Now <span>→</span>
            </button>
          </div>
          <div className="w-40 md:w-48">
            <img src="/Images/Img4.png" alt="Dairy Products" className="object-contain  -mt-24" />
          </div>
        </div>
        {/* right */}
        <div className="bg-[#3f1d2c] rounded-lg p-6 flex justify-between items-center  my-3  text-white w-xl  ">
          <div>
            <p className="text-lg font-light">20% Off</p>
            <p className="text-xs tracking-widest  mt-1 mb-2">SALE</p>
            <h2 className="text-2xl font-bold leading-snug">Alcoholic beverages</h2>
            <button className="mt-4 text-xl text-gray-300 hover:underline flex items-center gap-1">
              Shop Now <span>→</span>
            </button>
          </div>
          <div className="w-28 md:w-36">
            <img src="/Images/Img5.png" alt="Fruits & Vegetables" className="object-contain -mt-1" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
