import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { Link } from 'react-router-dom';

defineElement(lottie.loadAnimation);

const Home = () => {
  const categories = [
    { title: "Skincare", image: "/Images/skincare.png" },
    { title: "Watches", image: "/Images/Watch.png" },
    { title: "Groceries", image: "/Images/Groceries.png" },
    { title: "Haircare", image: "/Images/haircare.png" },
    { title: "Bread", image: "/Images/breads.png" },
    { title: "Cake", image: "/Images/cake.png" },
  ];

  const [counter, setCounter] = useState(0);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {/* Category Header */}
      <div className="flex items-center justify-between mt-6 mb-4">
        <h1 className="text-3xl font-medium">Category</h1>
        <div className="flex gap-3">
          <div className="prevbtn cursor-pointer">
            <img src="/Images/leftIcon.png" className="w-8 h-8 hover:bg-violet-500 rounded" />
          </div>
          <div className="nextbtn cursor-pointer">
            <img src="/Images/rightIcon.png" className="w-8 h-8 hover:bg-violet-500 rounded" />
          </div>
        </div>
      </div>

      {/* Category Swiper */}
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{ nextEl: ".nextbtn", prevEl: ".prevbtn" }}
        loop={true}
        speed={500}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-48 sm:h-60 w-full max-w-[200px] mx-auto text-black rounded-xl p-4 flex flex-col items-center bg-white shadow-md hover:scale-105 transition">
              <img src={item.image} alt={item.title} className="h-16 sm:h-20 object-contain mb-2" />
              <h2 className="text-base sm:text-lg font-semibold text-center">{item.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Featured Products */}
      <div className="mt-12">
        <h1 className="text-3xl font-medium mb-6">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-4 flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                <img src="/Images/banana.png" className="h-24 object-contain" />
              </div>
              <h2 className="text-lg font-semibold text-center mt-4">Banana</h2>
              <p className="text-sm text-gray-500 text-center mt-1">Unit - 1</p>

              <div className="flex justify-center mt-2">
                <lord-icon
                  src="https://cdn.lordicon.com/rjzlnunf.json"
                  trigger="click"
                  colors="primary:black,secondary:#ff0000"
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                ></lord-icon>
              </div>

              <div className="text-xl font-bold text-center mt-3">₹ 40</div>

              <div className="flex justify-between items-center mt-4 px-2">
                <div className="flex items-center gap-2">
                  <button onClick={() => setCounter(Math.max(counter - 1, 0))} className="w-7 h-7 bg-gray-200 rounded hover:bg-red-300">-</button>
                  <span className="text-sm">{counter}</span>
                  <button onClick={() => setCounter(counter + 1)} className="w-7 h-7 bg-gray-200 rounded hover:bg-green-300">+</button>
                </div>
                <button className="text-sm text-blue-600 hover:underline">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Cards */}
      <div className="mt-12 flex flex-col lg:flex-row gap-6">
        <div className="flex flex-1 bg-[#fdebe8] rounded-xl shadow-md p-6 items-center gap-4 max-w-full">
          <div className="flex-1">
            <h4 className="text-[#f9be4a] font-medium">Upto 25% Off</h4>
            <h2 className="text-xl font-bold">Luxa Dark Chocolate</h2>
            <p className="text-gray-600 text-sm mt-1 mb-3">Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button className="bg-[#14181F] text-white px-4 py-2 rounded hover:bg-[#3c3c47]">SHOP NOW</button>
          </div>
          <img src="https://images.unsplash.com/photo-1641896482215-2d049113cb00?q=80&w=1170" alt="Luxa" className="w-40 h-40 object-cover rounded" />
        </div>

        <div className="flex flex-1 bg-[#eaf3fa] rounded-xl shadow-md p-6 items-center gap-4 max-w-full">
          <div className="flex-1">
            <h4 className="text-[#f9be4a] font-medium">Upto 25% Off</h4>
            <h2 className="text-xl font-bold">Creamy Muffins</h2>
            <p className="text-gray-600 text-sm mt-1 mb-3">Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button className="bg-[#14181F] text-white px-4 py-2 rounded hover:bg-[#3c3c47]">SHOP NOW</button>
          </div>
          <img src="https://images.unsplash.com/photo-1615144676446-6353513a7f07?q=80&w=1333" alt="Muffins" className="w-40 h-40 object-cover rounded" />
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12 mb-8">
        <Link to="/products">
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-yellow-600 transition">
            Explore More Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
