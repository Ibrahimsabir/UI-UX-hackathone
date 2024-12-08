import React from "react";
import Image from "next/image";

const DressStyle = () => {
  return (
    <div className="w-[90%] max-w-[1440px] h-[866px] mx-auto mt-12 bg-[#F0F0F0] rounded-2xl p-14">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] my-12">
          BROWSE DRESS BY
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* First Image */}
        <div className="col-span-1">
          <div className="w-[407px] h-[289px] relative ml-14">
            <Image
              src="/style1.png" // Replace with your image path
              alt="Dress Style 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="col-span-3">
          <div className="w-[684px] h-[289px] relative ml-40">
            <Image
              src="/style2.png" // Replace with your image path
              alt="Dress Style 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Third Image */}
        <div className="col-span-1">
          <div className="w-[407px] h-[289px] relative ml-14">
            <Image
              src="/style3.png" // Replace with your image path
              alt="Dress Style 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Fourth Image */}
        <div className="col-span-3">
          <div className="w-[684px] h-[289px] relative ml-40">
            <Image
              src="/style4.png" // Replace with your image path
              alt="Dress Style 4"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
