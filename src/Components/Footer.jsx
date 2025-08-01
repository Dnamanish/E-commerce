import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-900 text-gray-200 px-6 pt-10 pb-6">
            <div className="max-w-4xl mx-auto flex flex-wrap gap-10 md:gap-0 justify-between">
                {/* Logo & Tagline */}
                <div className="flex-1 min-w-[220px] mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            {/* Use your own SVG/logo if available */}
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                        <span className="font-bold text-2xl text-yellow-400">ShopMate</span>
                    </div>
                    <p className="text-sm text-gray-400">Your favorite online shop for chocolate, muffins & more.</p>
                    <div className="flex gap-5 mt-4">
                        {/* Social icons */}
                        <a href="#" className="hover:text-yellow-300" aria-label="Instagram">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="8" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-yellow-300" aria-label="Twitter">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="4" y="8" width="16" height="8" rx="3" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-yellow-300" aria-label="Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="7" y="6" width="10" height="12" rx="5" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Quick Links */}
                <div className="flex-1 min-w-[140px] mb-6">
                    <h3 className="font-semibold text-lg mb-3">Shop</h3>
                    <ul className="flex flex-col gap-2 text-gray-400 text-base">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">All Products</a></li>
                        <li><a href="#" className="hover:text-white">Offers</a></li>
                        <li><a href="#" className="hover:text-white">Gift Cards</a></li>
                    </ul>
                </div>
                {/* Customer Service */}
                <div className="flex-1 min-w-[140px] mb-6">
                    <h3 className="font-semibold text-lg mb-3">Customer Service</h3>
                    <ul className="flex flex-col gap-2 text-gray-400 text-base">
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                {/* Newsletter */}
                <div className="flex-1 min-w-[220px] mb-6">
                    <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
                    <p className="text-sm text-gray-400 mb-4">Join our newsletter for latest deals & launches.</p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none text-gray-900"
                            placeholder="Your email address"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-4 flex flex-col sm:flex-row justify-between text-xs text-gray-500 items-center">
                <span>© {new Date().getFullYear()} ShopMate. All rights reserved.</span>
                <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="hover:text-yellow-400">Terms</a>
                    <span>·</span>
                    <a href="#" className="hover:text-yellow-400">Privacy</a>
                </div>
            </div>
        </div>

    )
}

export default Footer