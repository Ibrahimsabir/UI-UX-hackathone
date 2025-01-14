import React from 'react'
import Image from 'next/image'
import CasualCard from '../components/casualcard'
import ProductDetailGrid from '../components/productdetail/productpics'

  

const CartCheckOut = () => {
    
  return (
    <div className='w-[710px]  h-[508px] h-flex md:flex-col justify-center items-center m-auto'>
        <div className='w-[667px] h-[124px] flex justift-start items-center p-2 m-auto border-2 border-gray-100 divide-2 divide-gray-100 '>
            <Image
                src="/maylike3.png"
                width={124}
                height={124}
                alt="1st Item Selected"
                />
                <div className='flex flex-col justify-start items-center p-2 m-auto'>
                    <h1 className='text-xl font-semibold font-[Santoshi]'>Gradient Graphic T-shirt</h1>
                    <h2 className='text-xl font-semibold font-[Santoshi]'>Size: Large</h2>
                    <h2 className='text-xl font-semibold font-[Santoshi]'>Color: Blue</h2>
                  <div className='flex justify-between items-center mx-auto'>
                    <h1 className='text-2xl font-semibold font-[Santoshi]'>$ 145</h1>
                    <button className='text-2xl font-semibold font-[Santoshi] rounded-4xl bg-gray-300'>
                        -  1  +
                    </button >

                  </div>
                </div>
                
        </div>
        <div className='w-[667px] h-[124px] flex justift-start items-center p-2 m-auto border-2 border-gray-100 divide-2 divide-gray-100 '>
            <Image
                src="/maylike3.png"
                width={124}
                height={124}
                alt="1st Item Selected"
                />
                <div className='flex flex-col justify-start items-center p-2 m-auto'>
                    <h1 className='text-xl font-semibold font-[Santoshi]'>Gradient Graphic T-shirt</h1>
                    <h2 className='text-xl font-semibold font-[Santoshi]'>Size: Large</h2>
                    <h2 className='text-xl font-semibold font-[Santoshi]'>Color: Blue</h2>
                  <div className='flex justify-between items-center mx-auto'>
                    <h1 className='text-2xl font-semibold font-[Santoshi]'>$ 145</h1>
                    <button className='text-2xl font-semibold font-[Santoshi] rounded-4xl bg-gray-300'>
                        -  1  +
                    </button >

                  </div>
                </div>
                
        </div>
        <div className='w-[667px] h-[124px] flex justift-start items-start p-2 m-auto border-2 border-gray-100 divide-x-2 divide-gray-100 '>
            <Image
                src="/maylike3.png"
                width={124}
                height={124}
                alt="1st Item Selected"
                />
                <div className='flex flex-col justify-start items-center p-2 '>
                    <h1 className='text-xl font-semibold font-[Santoshi]'>Gradient Graphic T-shirt</h1>
                    <h2 className='text-xl font-semibold font-[Santoshi]'>Size: Large</h2>
                    <h2 className='text-xl font-semibold font-[Santoshi]'>Color: Blue</h2>
                  <div className='flex justify-evenly items-center mx-2'>
                    <h1 className='text-2xl font-semibold font-[Santoshi]'>$ 145</h1>
                    <button className='text-2xl font-semibold font-[Santoshi] rounded-4xl bg-gray-300'>
                        -  1  +
                    </button >

                  </div>
                </div>
                
        </div>
    </div>
  )
}
export default CartCheckOut