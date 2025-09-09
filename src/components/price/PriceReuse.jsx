import React from 'react'
import { GoCheckbox } from "react-icons/go";

const PriceReuse = ({textone,te ,three,two,icon,className}) => {
  return (
    <div className=' flex flex-col gap-10'>
        
                <h5 className='text-center text-3xl font-semibold '>{textone} <br /> <span className='text-2xl' >{te}</span></h5>
                <span className='bg-[#EFF4F899] py-5 text-center text-2xl font-medium'>{two}</span>
                <span className='text-center text-2xl font-medium'>{three}</span>
                <span className='bg-[#EFF4F899] py-5 pl-35 text-[#43CB83] text-2xl font-semibold'><GoCheckbox /></span>
                <span className={`text-center text-2xl font-semibold text-[#43CB83] pl-35 pb-2 ${className}`}>{icon}</span>
                <span className='bg-[#EFF4F899] py-5 text-center  pl-35 text-[#43CB83] text-2xl font-semibold'><GoCheckbox /></span>
                <span className='text-center pl-35 text-[#43CB83] text-2xl font-semibold'><GoCheckbox /></span>
                
                
                

            </div>
  )
}

export default PriceReuse