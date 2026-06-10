import React from "react";

const About = () => {
  return (
    <div className="bg-white px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side Images */}
        <div className="flex gap-6 justify-center">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
            alt="Fashion"
            className="w-72 h-[500px] object-cover rounded-xl shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
            alt="Furniture"
            className="w-72 h-[500px] object-cover rounded-xl shadow-lg mt-16"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <p className="text-orange-500 font-semibold text-lg mb-3 py-4">
            About Us
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mb-8 py-4leading-tight">
            Your One-Stop Shopping Destination
          </h1>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Discover a wide range of products including fashion, shoes,
            furniture, groceries, home décor, kitchen essentials, and much
            more. We provide quality products at affordable prices with a
            seamless shopping experience.
          </p>

          {/* Categories */}
          <div className="grid grid-cols-2 gap-4 mb-8">

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <span className="text-gray-700">Fashion & Clothing</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <span className="text-gray-700">Shoes & Footwear</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <span className="text-gray-700">Furniture</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <span className="text-gray-700">Home Decoration</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <span className="text-gray-700">Kitchen Essentials</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <span className="text-gray-700">Daily Groceries</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <span className="text-gray-700">Electronics</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <span className="text-gray-700">Fast Delivery</span>
            </div>

          </div>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Our mission is to make online shopping easy, affordable, and
            enjoyable. From everyday essentials to premium lifestyle products,
            everything is available at your fingertips with quick and reliable
            delivery.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition duration-300">
            Shop Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;