import React, { useState } from 'react'
import Logo from "../../assets/logo.png"
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import BgBan from '../../assets/bgban.png'

const Navbar = () => {

   let [show,setShow]= useState(false)

    let toggleMenu =()=>{
      setShow(!show)
    }



  return (
    <nav className='bg-transparent absolute w-full top-4 left-0 '>
      <div className='max-w-[1320px] mx-auto px-10 md:py-8 py-5 h-[12vh] md:h-[14vh] '>
        <div className='flex justify-between items-center '>
          <div>
          <a href="#"><img src={Logo} alt="" /></a>

        </div>
        <div>
          <ul className='md:flex gap-15 text-white hidden'>
            <li>
              <a href="#" className='text-lg font-semibold'>Home</a>
            </li>
            <li>
              <a href="#" className='text-lg font-semibold'>About</a>
            </li>
            <li>
              <a href="#" className='text-lg font-semibold'>Service</a>
            </li>
            <li>
              <a href="#" className='text-lg font-semibold'>Portfolio</a>
            </li>
            <li>
              <a href="#" className='text-lg font-semibold'>Price</a>
            </li>
            <li>
              <a href="#" className='text-lg font-semibold'>Blog</a>
            </li>
          </ul>
        </div>
        <div className='md:flex items-center hidden '>
          <button className='text-white border text-lg font-semibold px-9 py-4 rounded-2xl hover:bg-red-500 hover:border-red-500'>
            Contact Us
          </button>

        </div>

       

          <div onClick={toggleMenu} className='text-4xl text-white md:hidden '>
            
            {show===true ? <TbMenu3 />:<TbMenu2 />}
            
            
         
          </div>
        
         
        </div>
         <div className=''>
          <ul className={`flex flex-col items-center  text-white   gap-y-10  bg-red-500/15 backdrop-blur-lg rounded-lg p-10  md:hidden absolute  top-30 -left-full  transform -translate-x-1/2 duration-500 ${show == true ? 'left-1/2' : ''}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Price</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
        <li className=' items-center  '>
          <button className='text-white border px-10 py-2 rounded-2xl '>
            Contact Us
          </button>

        </li>
          </ul>
        </div>

     </div>
    </nav>
  )
}

export default Navbar