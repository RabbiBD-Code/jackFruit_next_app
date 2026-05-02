import React from 'react';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Summer Sale 50% OFF ☀️
      </h1>
      <p className="text-lg mb-6">Hot Deals 🔥 on all products</p>
      <button className="bg-black px-6 py-3 rounded-lg font-semibold">
        Shop Now
      </button>
    </div>
    );
};

export default Banner;