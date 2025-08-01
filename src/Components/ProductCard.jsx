import React from 'react'

const ProductCard = ({ title, image, price }) => {
    return (
        <div className="bg-white border rounded-xl shadow-md p-4 flex flex-col hover:shadow-xl hover:scale-105 transition-transform duration-300 items-center w-full hover: mt-5 ml-5">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-contain mb-3"
            />
            <h2 className="text-md font-semibold text-center line-clamp-2 mb-2">
                {title}
            </h2>
            <p className="text-green-600 font-bold text-lg font-serif">Price:${price}</p>
        </div>
    );
};

export default ProductCard;
