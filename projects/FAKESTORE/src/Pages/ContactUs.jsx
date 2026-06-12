import React, { useEffect, useState } from "react";
import loading from "../assets/loading.svg";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loadPage = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");
      await res.json();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={loading} alt="" className="w-32" />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-radial-[at_50%] from-white to-zinc-900 to-65%">
          <div className="max-w-md w-full bg-gray-800 p-5 rounded-tr-full shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-100">
                Contact Us
              </h1>

              <p className="text-gray-400">
                Fill up the form below to send us a message.
              </p>
            </div>

            <div className="mt-7">
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-400"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-75 px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-400"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-89 px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm text-gray-400"
                  >
                    Phone Number
                  </label>

                  <input
                    type="text"
                    id="phone"
                    placeholder="+91 9876543210"
                    className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-400"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white hover:bg-indigo-700 py-4 px-4 rounded-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;