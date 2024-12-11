"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ResponsiveGrid = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initialize the state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full max-w-[1240px] h-auto rounded-[40px] items-center m-auto py-8 bg-gray-100">
      {/* Heading */}
      <h1 className="font-[Integral CF] text-3xl sm:text-4xl md:text-5xl font-semibold text-center my-8">
        BROWSE BY DRESS STYLE
      </h1>

      {isMobile ? (
        // Mobile View
        <div className="grid grid-cols-1 my-2 w-[90%] max-w-[600px] mx-auto">
          {[
            { href: '/casual', img: '/images/mobilescreen/Frame 105.png', alt: 'Casual' },
            { href: '/formal', img: '/images/mobilescreen/Frame 106.png', alt: 'Formal' },
            { href: '/formal-style', img: '/images/mobilescreen/Frame 107.png', alt: 'Formal Style' },
            { href: '/other-style', img: '/images/mobilescreen/Frame 108.png', alt: 'Other Style' },
          ].map(({ href, img, alt }, index) => (
            <div key={index} className="w-full aspect-square rounded-3xl overflow-hidden group">
              <Link href={href} className="block">
                <Image
                  src={img}
                  width={1000}
                  height={1000}
                  alt={alt}
                  className="w-full h-full object-cover rounded-3xl transition-opacity duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90 group-hover:shadow-lg"
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        // Larger Screen View
        <div className="grid grid-cols-2 gap-6 w-[90%] mx-auto">
          {[
            { href: '/casual', img: '/images/Frame 61.png', alt: 'Casual' },
            { href: '/formal', img: '/images/Frame 62.png', alt: 'Formal' },
            { href: '/formal-style', img: '/images/Frame 64 (1).png', alt: 'Formal Style' },
            { href: '/other-style', img: '/images/Frame 63 (1).png', alt: 'Other Style' },
          ].map(({ href, img, alt }, index) => (
            <div key={index} className="h-[289px] rounded-3xl overflow-hidden group">
              <Link href={href} className="block">
                <Image
                  src={img}
                  width={1000}
                  height={1000}
                  alt={alt}
                  className="w-full h-full object-cover rounded-3xl transition-transform transition-opacity duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90 group-hover:shadow-lg"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResponsiveGrid;