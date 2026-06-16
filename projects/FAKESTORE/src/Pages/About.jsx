import React, { useEffect, useState } from "react";
import loading from "../assets/loading.svg";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAboutData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");

      const data = [
        {
          title: "Fashion & Clothing",
          image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
          desc: "Explore trendy outfits and fashion collections.",
        },
        {
          title: "Furniture",
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
          desc: "Modern furniture for your dream home.",
        },
        {
          title: "Shoes & Footwear",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
          desc: "Premium and comfortable footwear.",
        },
        {
          title: "Home Decoration",
          image:
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
          desc: "Decorate your home beautifully.",
        },
        {
          title: "Fashion & Clothing",
          image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
          desc: "Explore trendy outfits and fashion collections.",
        },
        {
          title: "Furniture",
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
          desc: "Modern furniture for your dream home.",
        },
        {
          title: "Shoes & Footwear",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
          desc: "Premium and comfortable footwear.",
        },
        {
          title: "Home Decoration",
          image:
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
          desc: "Decorate your home beautifully.",
        },
      ];

      setAboutData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={loading} alt="" className="w-32" />
        </div>
      ) : (
        <div className="p-10">
          <h1 className="text-5xl font-bold text-center mb-4">
            About Us
          </h1>

          <p className="text-center text-gray-500 mb-10">
            Your One-Stop Shopping Destination
          </p>

          <div className="grid grid-cols-4 gap-5">
            {aboutData.length > 0 &&
              aboutData.map((item, index) => (
                <div
                  className="border rounded-xl shadow p-3"
                  key={index}
                >
                  <div className="w-full h-52">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="mt-4">
                    <h2 className="text-xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {item.desc}
                    </p>

                    <button className="mt-4 bg-orange-400 px-4 py-2 rounded-full">
                      Explore
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default About;