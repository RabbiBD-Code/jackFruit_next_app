import 'animate.css';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
   <div>
     <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-20 px-6 text-center">
      <h1  className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__zoomIn">
        Summer Sale 50% OFF ☀️
      </h1>
      <p className="text-lg mb-6">Hot Deals 🔥 on all products</p>
      <button className="bg-black px-6 py-3 rounded-lg font-semibold">
        Shop Now
      </button>
    </div>
    <div>
       {/* 🌿 SUMMER CARE TIPS */}
      <section className="bg-gray-100 p-10 mt-5 text-center">
        <h2 className="text-2xl font-bold mb-4">Summer Care Tips</h2>
        <ul className=" ml-6 space-y-2 text-center">
          <li>Stay hydrated 💧</li>
          <li>Use sunscreen daily ☀️</li>
          <li>Wear light breathable clothes 👕</li>
        </ul>
      </section>

      {/* 🏷️ TOP BRANDS */}
       <section className="p-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Brands</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Brand 1 */}
        <div className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <Image
              src='/download (3).jpg'
              width={80}
              height={80}
              alt="SunShade"
            />
          </div>
          <h3 className="text-lg font-semibold">SunShade</h3>
          <button className="mt-3 px-4 py-2 bg-black text-white rounded">
            View Products
          </button>
        </div>

        {/* Brand 2 */}
        <div className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <Image
              src="/download.png"
              width={80}
              height={80}
              alt="CoolFit"
            />
          </div>
          <h3 className="text-lg font-semibold">CoolFit</h3>
          <button className="mt-3 px-4 py-2 bg-black text-white rounded">
            View Products
          </button>
        </div>

        {/* Brand 3 */}
        <div className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <Image
              src="/unnamed.png"
              width={80}
              height={80}
              alt="BloomStyle"
            />
          </div>
          <h3 className="text-lg font-semibold">BloomStyle</h3>
          <button className="mt-3 px-4 py-2 bg-black text-white rounded">
            View Products
          </button>
        </div>

      </div>
    </section>
    </div>
   </div>
  );
};

export default Banner;