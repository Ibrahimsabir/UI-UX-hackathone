// "use client";
// import toast, { Toaster } from "react-hot-toast";
// import React, { useState, useEffect } from "react";
// import { ProductsData } from "../Allproductsdata/PruductData";
// import { AiOutlineStar, AiFillStar, AiOutlineHeart } from "react-icons/ai";
// import ProductDetailGrid from "./productpics";

// // Update Product interface to make color optional
// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
//   rating: number;
//   // price: string;
//   priceWas: string;
 
// }

// const ProductsDetail = ({ params }: { params: { id: number } }) => {
//   const [product, setProduct] = useState<Product | null>(null);

//   const { id } = params; // Assuming id is passed in the URL
//   console.log("ID from useRouter:", id);

//   useEffect(() => {
//     // Find the product by id
//     if (id) {
//       const product = ProductsData.find((item) => item.id === Number(id));
//       setProduct(product || null);
//     }
//   }, [id]); // Add id to the dependency array

//   const addtocarthandler = () => {
//     toast.success("Item added to cart!", {
//       position: "top-center",
//     });
//   };

//   // Fallback image in case product.img is undefined
//   // const fallbackImage = "/images/default-product.jpg"; // Replace with your default image path

//   return (
//     <section className="text-gray-600 shadow-lg body-font overflow-hidden">
//       <Toaster />
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-row">
//           <ProductDetailGrid />
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {product ? product.title : "Loading..."}
//             </h1>
//             <div className="flex mb-4">
//               <span className="flex items-center">
//                 {Array(Math.floor(product?.rating || 0))
//                   .fill("")
//                   .map((_, idx) => (
//                     <AiFillStar key={idx} className="w-4 h-4 text-yellow-400" />
//                   ))}
//                 {Array(5 - Math.ceil(product?.rating || 0))
//                   .fill("")
//                   .map((_, idx) => (
//                     <AiOutlineStar key={idx} className="w-4 h-4 text-yellow-400" />
//                   ))}
//               </span>
//             </div>
//             <p className="leading-relaxed">{product?.description}</p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <div className="flex">
//                 <span className="mr-3">Color</span>
//                 {/* Render colors dynamically */}
//                 <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
//                 <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
//                 <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 {product?.price || "0.00"}
//               </span>
//               <div className="flex justify-end items-center">
//                 <button
//                   onClick={addtocarthandler}
//                   className="w-auto text-sm md:text-lg bg-[#f7d1a6] font-medium py-1 px-2 text-white rounded-lg hover:shadow-lg"
//                 >
//                   Add To Cart
//                 </button>
//                 <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                   <AiOutlineHeart className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsDetail;
