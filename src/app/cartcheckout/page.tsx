import React from 'react'
import Image from 'next/image'

const items = [
    {
      id: 1,
      name: 'Versace T-Shirt',
      size: 'L',
      color: 'Black',
      price: 50,
      imageUrl: '/images/versace-shirt.jpg',  // Replace with actual image path
    },
    {
      id: 2,
      name: 'Zara Jeans',
      size: 'M',
      color: 'Blue',
      price: 40,
      imageUrl: '/images/zara-jeans.jpg',  // Replace with actual image path
    },
    {
      id: 3,
      name: 'Gucci Hat',
      size: 'One Size',
      color: 'Red',
      price: 30,
      imageUrl: '/images/gucci-hat.jpg',  // Replace with actual image path
    },
    {
      id: 4,
      name: 'Nike Running Shoes',
      size: '11',
      color: 'White/Black',
      price: 120,
      imageUrl: '/images/nike-shoes.jpg',  // Replace with actual image path
    },
    {
      id: 5,
      name: 'Adidas Hoodie',
      size: 'L',
      color: 'Grey',
      price: 70,
      imageUrl: '/images/adidas-hoodie.jpg',  // Replace with actual image path
    },
    {
      id: 6,
      name: 'Ray-Ban Sunglasses',
      size: 'One Size',
      color: 'Black',
      price: 150,
      imageUrl: '/images/rayban-sunglasses.jpg',  // Replace with actual image path
    },
    {
      id: 7,
      name: 'Puma Sweatpants',
      size: 'M',
      color: 'Navy Blue',
      price: 45,
      imageUrl: '/images/puma-sweatpants.jpg',  // Replace with actual image path
    },
    {
      id: 8,
      name: 'Louis Vuitton Wallet',
      size: 'One Size',
      color: 'Brown',
      price: 250,
      imageUrl: '/images/louis-vuitton-wallet.jpg',  // Replace with actual image path
    },
    {
      id: 9,
      name: 'Checkered Shirt',
      size: ['Large','Small','Medium'],
      color: 'Black',
      price: 199,
      imageUrl: '/newarr3.png',  // Replace with actual image path
    },
    {
      id: 10,
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
      imageUrl: '/maylike3.png',  // Replace with actual image path
    }
  ];
  

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