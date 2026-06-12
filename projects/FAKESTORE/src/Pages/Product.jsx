import React, { useEffect, useState } from "react";

import loading from "../assets/loading.svg";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={loading} alt="" className="w-50" />
        </div>
      ) : (
        <div className="p-10 grid grid-cols-4 gap-5">
          {products.length > 0 &&
            products.map((product, index) => (
              <div className="w-75 border rounded h-100 p-3" key={index}>
                <div className="w-full h-40">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between h-50">
                  <div>
                    <p className="text-xl">{product.title}</p>
                    <p className="text-sm capitalize text-gray-500">
                      {product.category}
                    </p>
                    <p>₹ {product.price * 100}</p>
                    <p>{product.rating.rate}/5</p>
                  </div>

                  <button className="bg-orange-400 rounded-full px-4 py-2">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;

// import React from "react";

// const Product = () => {
//   return (
//     <div className="bg-white p-8">
//       <div className="grid grid-cols-6 gap-6">

//         {/* Card 1 */}[[]]
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">3.3</span>
//               <span className="text-orange-500">★★★★☆</span>
//               <span className="text-sm text-gray-500">(29)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹2,099</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,999</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Mens Casual Premium Slim Fit T-Shirts 
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.1</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(52)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹1,499</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,199</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Premium Cotton Jacket for Men Casual Wear
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.4</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(108)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹3,999</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹4,999</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">3.3</span>
//               <span className="text-orange-500">★★★★☆</span>
//               <span className="text-sm text-gray-500">(29)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹2,099</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,999</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 5 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Mens Casual Premium Slim Fit T-Shirts 
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.1</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(52)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹1,499</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,199</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>


//         {/* Card 6 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src= "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Premium Slim Fit Casual Shirt for Men 
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.7</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(145)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹2,299</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹3,199</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 1 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">3.3</span>
//               <span className="text-orange-500">★★★★☆</span>
//               <span className="text-sm text-gray-500">(29)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹2,099</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,999</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Mens Casual Premium Slim Fit T-Shirts 
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.1</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(52)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹1,499</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,199</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Premium Cotton Jacket for Men Casual Wear
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.4</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(108)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹3,999</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹4,999</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">3.3</span>
//               <span className="text-orange-500">★★★★☆</span>
//               <span className="text-sm text-gray-500">(29)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹2,099</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,999</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 5 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Mens Casual Premium Slim Fit T-Shirts 
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.1</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(52)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹1,499</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,199</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>


//         {/* Card 6 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src= "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Premium Slim Fit Casual Shirt for Men 
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.7</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(145)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹2,299</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹3,199</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 1 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">3.3</span>
//               <span className="text-orange-500">★★★★☆</span>
//               <span className="text-sm text-gray-500">(29)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹2,099</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,999</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Mens Casual Premium Slim Fit T-Shirts 
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.1</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(52)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹1,499</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,199</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Premium Cotton Jacket for Men Casual Wear
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.4</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(108)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹3,999</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹4,999</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">3.3</span>
//               <span className="text-orange-500">★★★★☆</span>
//               <span className="text-sm text-gray-500">(29)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹2,099</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,999</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>

//         {/* Card 5 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Mens Casual Premium Slim Fit T-Shirts 
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.1</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(52)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹1,499</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹2,199</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>


//         {/* Card 6 */}
//         <div className="border border-gray-200 bg-white">
//           <div className="bg-gray-100 h-72 flex items-center justify-center p-4">
//             <img
//               src= "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
//               alt="product"
//               className="h-56 object-contain"
//             />
//           </div>

//           <div className="bg-white p-4">
//             <h3 className="text-[16px] font-normal leading-6 text-gray-800">
//               Premium Slim Fit Casual Shirt for Men 
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-sm text-gray-700">4.7</span>
//               <span className="text-orange-500">★★★★★</span>
//               <span className="text-sm text-gray-500">(145)</span>
//             </div>

//             <div className="mt-3">
//               <span className="text-3xl font-medium">₹2,299</span>
//             </div>

//             <p className="text-sm text-gray-500 mt-1">
//               M.R.P:
//               <span className="line-through ml-1">₹3,199</span>
//             </p>

//             <p className="text-blue-600 font-semibold mt-2">
//               Prime
//             </p>
//           </div>
//         </div>



//       </div>
//     </div>
//   );
// };

// export default Product;