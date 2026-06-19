import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bgImage.jpg";

const Home = () => {
  return (
    <div
      className="h-[90vh] flex items-center justify-center bg-cover bg-center p-10 md:pe-30"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center bg-white rounded-md px-4 py-3 w-full max-w-4xl mx-auto">

  
  {/* Search Icon */}
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    className="text-gray-600 text-md mr-3"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
  </svg>

  {/* Input */}
  <input
    type="text"
    placeholder="Search restaurants for foods ...."
    className="bg-white w-full outline-none text-orange-700"
  />

</div>
    </div>
  );
};

export default Home;

// import bgImage from "../assets/bgImage.jpg";

// const Home = () => {
//   return (
//     <div>
//       <img
//         src={bgImage}
//         alt="bgImage"
//         className="w-full h-[90vh] object-cover"
//       />
//        <h1 className="text-5xl text-red-500">HOME PAGE</h1>
//     </div>
//   );
// };

// export default Home;
