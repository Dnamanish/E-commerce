import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { FunnelIcon } from '@heroicons/react/24/solid';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  // For price range slider
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRange, setSelectedRange] = useState([0, 1000]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFiltered(data);
      const prices = data.map(item => item.price);
      const min = Math.floor(Math.min(...prices));
      const max = Math.ceil(Math.max(...prices));
      setPriceRange([min, max]);
      setSelectedRange([min, max]);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(
      item => item.price >= selectedRange[0] && item.price <= selectedRange[1]
    );
    setFiltered(filteredProducts);
  }, [selectedRange, products]);

  if (loading) return <p className="text-xl text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sticky Amazon-Style Sidebar on the left */}
      <aside className="w-64 bg-gray-100 border-r border-gray-200 p-6 flex flex-col gap-8 sticky top-0 min-h-screen">
        <div className="flex items-center gap-2 mb-3">
          <FunnelIcon className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-bold tracking-tight">Filters</h2>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Price</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-700">${priceRange[0]}</span>
              <input
                type="range"
                min={priceRange[0]}
                max={priceRange[1]}
                step="1"
                value={selectedRange[0]}
                onChange={e =>
                  setSelectedRange([+e.target.value, selectedRange[1]])
                }
                className="w-full accent-blue-500"
              />
              <input
                type="range"
                min={priceRange[0]}
                max={priceRange[1]}
                step="1"
                value={selectedRange[1]}
                onChange={e =>
                  setSelectedRange([selectedRange[0], +e.target.value])
                }
                className="w-full accent-blue-500"
              />
              <span className="text-xs text-gray-700">${priceRange[1]}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 px-1">
              <span>
                Min: <b>${selectedRange[0]}</b>
              </span>
              <span>
                Max: <b>${selectedRange[1]}</b>
              </span>
            </div>
          </div>
          <div className="mt-3 space-x-2 flex flex-wrap">
            <button
              onClick={() => setSelectedRange([priceRange[0], priceRange[1]])}
              className="bg-blue-50 text-blue-800 px-3 py-1 rounded-lg text-xs hover:bg-blue-100"
            >
              All
            </button>
            <button
              onClick={() => setSelectedRange([0, 25])}
              className="bg-gray-200 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs"
            >
              $0 - $25
            </button>
            <button
              onClick={() => setSelectedRange([25, 50])}
              className="bg-gray-200 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs"
            >
              $25 - $50
            </button>
            <button
              onClick={() => setSelectedRange([50, 100])}
              className="bg-gray-200 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs"
            >
              $50 - $100
            </button>
          </div>
        </div>
        {/* Add other filter sections here (e.g. category, ratings, etc.) */}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(item => (
            <ProductCard
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Product;
