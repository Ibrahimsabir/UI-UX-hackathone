import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from 'next/link';



const Navbar = () => {
  return (
    <div className={`font-Integral CF w-full h-[100px] gap-8 `}>
      <div className="max-w-[1170px] h-full flex flex-col md:flex-row border-b-2 border-gray-300 justify-between items-center  sm:px-6 md:px-8 lg:px-0 mx-20">
        {/* Logo */}
        <h1 className="text-[32px] font-IntegralCF font-bold mb-4 md:mb-0">SHOP.CO</h1>
        
        {/* Navigation Links */}
        <ul className="font-Satoshi flex gap-4 text-sm sm:text-base md:gap-6 cursor-pointer">
          <li className="hover:border-b-2 border-gray-400">
            <Link href="/" className='flex'>Shop <RiArrowDropDownLine className='text-2xl'/></Link>
          </li>
          <li className="hover:border-b-2 border-gray-400">
            <Link href="/contact">On Sale</Link>
          </li>
          <li className="hover:border-b-2 border-gray-400">
            <Link href="/about">New Arrival</Link>
          </li>
          <li className="hover:border-b-2 border-gray-400">
            <Link href="/login" target="_blank">Brands</Link>
          </li>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6">
          {/* Search Input */}
          <div className="flex items-center bg-[#F5F5F5] rounded-xl overflow-hidden mr-8">
          <IoSearch className="text-3xl text-gray-700 px-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="font-Satoshi bg-[#F5F5F5] px-4 py-2 outline-none text-sm w-[225px] sm:w-[250px]"
            />
            
          </div>
          {/* Icons */}
         
          <FiShoppingCart className="text-2xl text-black cursor-pointer" />
          <IoPersonCircleSharp className="text-3xl text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
