import React from 'react'

export default function About() {
  return (
    <div className='w-[100%] '>

    <div className='md:grid grid-cols-5 w-[100%] flex flex-col'>
    <div className="w-[100%] col-span-3 md:h-[500px] h-[600px]  flex flex-col gap-5
    items-center my-10">
    <div className=' w-[85%]  py-5 '>
    <h1 className='text-center text-4xl font-bold text-orange-950 '>About us</h1>
    <p className='text-[1.2em] text-gray-900 py-5 text-center '>Welcome to <span className='text-orange-700 font-bold'>Our Website</span>, Welcome to our kitchen essentials website, your one-stop destination for everything you need to create delicious meals!  Discover expert tips, recipes, and guides to make the most of your kitchen. Browse our collections and find everything you need to cook, bake, and serve with confidence. Transform your kitchen into a culinary haven with our trusted products!</p>

    </div>
  <div className='w-[70%]'>
  <h1 className='italic text-gray-700 text-center'>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</h1>
  <p className='text-right text-gray-950 font-bold'>– Winona LaDuke
  </p>
  </div>

    </div> 
    <div className="2 col-span-2 md:h-[500px] h-[300px] md:my-1 my-5">
    <img src="https://thecolosseum.co.in/assets/images/latest-cube-images/new%20cube%20images%20(1)/Kitchen/carousel/Slide-1.jpg" alt="" className='px-4 md:w-[100%] md:h-[90%] h-[100%] w-[90%] md:m-4 p-4 mx-auto mt-[-20px] border rounded-[10px]'/>
    </div>
    </div>
    </div>
  )
}
