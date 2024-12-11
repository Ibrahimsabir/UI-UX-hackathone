
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Grid = () => {
  return (
    <div className='w-[1240px] h-[866px] rounded-[40px] items-center m-auto py-8 bg-gray-100 mx-auto'>
      {/* Heading */}
      <h1 className='font-[Integral CF] text-5xl font-semibold text-center my-12 mx-auto'>
        BROWSE BY DRESS STYLE
      </h1>

      {/* Top Row */}
      <div className='grid grid-cols-[407px_684px] gap-6 w-[90%] mx-auto mb-6'>
        <div className='h-[289px] rounded-3xl overflow-hidden'>
          <Link href={"/casual"} className='block'>
            <div className='group relative'>
              <Image
                src={"/images/Frame 61.png"}
                width={1000}
                height={1000}
                alt='Casual'
                className='rounded-3xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl'
              />
            </div>
          </Link>
        </div>
        <div className='h-[289px] rounded-3xl overflow-hidden'>
          <Link href={"/formal"} className='block'>
            <div className='group relative'>
              <Image
                src={"/images/Frame 62.png"}
                width={1000}
                height={1000}
                alt='Formal'
                className='rounded-3xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl'
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Row */}
      <div className='grid grid-cols-[684px_407px] gap-6 w-[90%] mx-auto'>
        <div className='h-[289px] rounded-3xl overflow-hidden'>
          <Link href={"/formal-style"} className='block'>
            <div className='group relative'>
              <Image
                src={"/images/Frame 64 (1).png"}
                width={1000}
                height={1000}
                alt='Formal'
                className='rounded-3xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl'
              />
            </div>
          </Link>
        </div>
        <div className='h-[289px] rounded-3xl overflow-hidden'>
          <Link href={"/other-style"} className='block'>
            <div className='group relative'>
              <Image
                src={"/images/Frame 63 (1).png"}
                width={1000}
                height={1000}
                alt=''
                className='rounded-3xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl'
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Grid
