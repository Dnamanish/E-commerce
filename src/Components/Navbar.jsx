import React from "react";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import Hero from './Hero'

const Navbar = () => {
    return (
        <>
            <div className="bg-black text-white w-full">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="logo" className="h-8 w-8" />
                        <span className="text-xl font-bold">
                            FOOD<span className="text-yellow-400">MART</span>
                        </span>
                    </div>

                    {/* Search */}
                    <div className="flex items-center w-1/2 bg-gray-800 rounded">
                        <select className="bg-gray-800 text-sm p-2 outline-none">
                            <option>All Categories</option>
                            <option>Fruits</option>
                            <option>Vegetables</option>
                            <option>bread</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search for more than 20,000 products"
                            className="flex-1 bg-gray-800 px-4 py-2 outline-none text-sm"
                        />
                        <button className="p-2 pr-3">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-6">
                        <FaUser size={18} />
                        <FaHeart size={18} />
                        <div className="flex items-center gap-1">
                            <FaShoppingCart size={18} />
                        </div>
                    </div>
                </div>

                {/* Bottom Nav Links */}
                <div className="bg-gray-900 px-6 py-2 text-sm flex gap-6">
                    <select className="bg-gray-900 text-white outline-none">
                        <option>Shop by Departments</option>
                    </select>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Kids</span>
                    <span>Accessories</span>
                    <select className="bg-gray-900 text-white outline-none">
                        <option>Pages</option>
                    </select>
                    <span>Brand</span>
                    <span>Sale</span>
                    <span>Blog</span>
                </div>
            </div>

        </>
    );
};

export default Navbar;
