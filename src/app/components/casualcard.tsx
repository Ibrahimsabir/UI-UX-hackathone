import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

type CasualCardData = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
};

const CasualCard = () => {
  const card: CasualCardData[] = [
    {
      id: 1,
      image: "/topsell1.png",
      title: "VERTICAL STRIPED SHIRT",
      price: "$212",
      priceWas: "$232",
      rating: 4.7,
    },
    {
      id: 2,
      image: "/topsell2.png",
      title: "COURAGE GRAPHIC T-SHIRT",
      price: "$145",
      priceWas: "",
      rating: 4.0,
    },
    {
      id: 3,
      image: "/topsell3.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: "$80",
      priceWas: "",
      rating: 3.5,
    },
    {
      id: 4,
      image: "/topsell4.png",
      title: "FADED SKINNY JEANS",
      price: "$210",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 5,
      image: "/maylike1.png",
      title: "PLAID CHECKERED SHIRT",
      price: "$190",
      priceWas: "$250",
      rating: 4.8,
    },
    {
      id: 6,
      image: "/maylike2.png",
      title: "HIGH-WAISTED TROUSERS",
      price: "$170",
      priceWas: "",
      rating: 4.3,
    },
    {
      id: 7,
      image: "/maylike3.png",
      title: "LIGHTWEIGHT HOODED JACKET",
      price: "$230",
      priceWas: "$280",
      rating: 4.6,
    },
    {
      id: 8,
      image: "/newarr3.png",
      title: "COMFY SLIM-FIT SWEATPANTS",
      price: "$100",
      priceWas: "",
      rating: 4.2,
    },
    {
      id: 9,
      image: "/image 5.png",
      title: "DISTRESSED DENIM JACKET",
      price: "$260",
      priceWas: "$300",
      rating: 4.7,
    },
  ];

  // Function to calculate the discount percentage
  const calculateDiscount = (price: string, priceWas: string) => {
    if (priceWas) {
      const discount =
        ((parseFloat(priceWas.replace("$", "")) -
          parseFloat(price.replace("$", ""))) /
          parseFloat(priceWas.replace("$", ""))) *
        100;
      return Math.round(discount);
    }
    return 0;
  };

  return (
    <div>
      {/* Heading */}
      <div className="text-center mt-12 mb-6">
        <h1
          className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-start"
          style={{ textUnderlinePosition: "from-font" }}
        >
          Casual
        </h1>
      </div>

      {/* Card Section */}
      <div className="w-[90%] border-b-2 border-gray-200 grid grid-cols-3 gap-6 m-auto">
        {card.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-sm font-semibold mt-2">{item.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoMdStar
                    key={index}
                    className={`${
                      index < Math.round(item.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    } text-lg`}
                  />
                ))}
              </div>
              <span className="text-sm">{item.rating}/5</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">
                {item.price}
              </span>
              {item.priceWas && (
                <>
                  <span className="text-sm line-through text-gray-500">
                    {item.priceWas}
                  </span>
                  <button className="bg-pink-100 text-red-600 text-xs py-1 px-2 rounded-full">
                    {calculateDiscount(item.price, item.priceWas)}% OFF
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="col-span-full flex justify-between items-center px-12 mt-8 mb-12">
        <button className="flex gap-4 justify-between items-center text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-xl">
        <FaArrowLeftLong/>Previous
        </button>
        <button className="flex gap-4 justify-between items-center text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-xl">
          Next<FaArrowRightLong/>
        </button>
      </div>
    </div>
  );
};

export default CasualCard;
