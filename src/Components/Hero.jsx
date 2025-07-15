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
    imgSize: "w-96 md:w-96",
  },
  {
    title: "Fresh Fruits & Veggies",
    description: "Get 20% off on locally sourced fruits and vegetables.",
    image: "/Images/HeroImg2.png",
    bg: "#14532d",
    imgSize: "w-96 md:w-96",
  },
  {
    title: "Hot & Fresh Coffee",
    description: "Brewed to perfection. Try our seasonal flavors!",
    image: "/Images/HeroImg3.png",
    bg: "#4b3621",
    imgSize: "w-48 md:w-64",
  },
];

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={1500}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="my-10"
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
  );
};

export default Hero;
