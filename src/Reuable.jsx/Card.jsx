import React from 'react'
import Button from './Button'

export default function Card({src,head,para}) {
  return (
    <div className='w-[350px] h-[450px] flex flex-col gap-[20px]  items-center shadow-lg	border rounded-[10px]'>
      <div>
      <img src={src} alt="" className='w-[100%] h-[250px] py-3'/>
      </div>
      <div>
      <h1 className='text-3xl text-gray-600 text-center font-bold '>
      {head}
      </h1>
      <p className="text-center py-2">  {para}</p>
      <div className='w-[100%] flex flex-col justify-center items-center py-1'>
      <Button text="Explore"/>
      </div>
      </div>
    </div>
  )
}
