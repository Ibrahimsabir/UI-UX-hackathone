import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="flex font-IntegralCF justify-between items-center m-auto text-black relative bg-[#F2F0F1] w-[1440px] h-[663px] gap-0">
      {/* Content Here */}
      <div className="w-1/2 flex flex-col justify-start items-start pl-24 gap-6 m-auto">
        <h1 className="font-IntegralCF w-[577px] h-[173px] top-[237px] left-[100px] text-[64px] font-bold leading-[64px] text-left tracking-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="font-Satoshi text-[16px] text-black/60 font-normal leading-[22px] text-left tracking-tight">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        {/* Button */}
        <button className="bg-black text-white text-lg px-16 py-4 rounded-full">Shop Now</button>
      </div>

      {/* Image section */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/hero.png"
          alt="Hero Image"
          layout="fill"
          objectFit="contain" // Prevents cropping and keeps it centered
          className="object-center" // Ensures the image is centered
        />
      </div>
    </div>
  );
};
