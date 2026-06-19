import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45f"
              alt="Shopping"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Us
            </h1>

            <p className="text-gray-600 mb-4">
              Welcome to our online shopping platform. We offer a wide range of
              products including clothing, shoes, furniture, groceries,
              kitchen essentials, and home decor.
            </p>

            <p className="text-gray-600 mb-6">
              Our mission is to provide high-quality products at affordable
              prices with fast delivery and excellent customer service.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Quality Products
            </h2>
            <p className="text-gray-600">
              Best quality items from trusted brands.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Fast Delivery
            </h2>
            <p className="text-gray-600">
              Get your orders delivered quickly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Customer Support
            </h2>
            <p className="text-gray-600">
              We're here to help you anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;