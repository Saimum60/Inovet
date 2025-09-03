import React from 'react'
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <section>
        <div className='max-w-[1320px] mx-auto px-10 py-20 pt-40'>
       <div className='md:flex md:justify-between'>
             <div  className=''>
                <img src={Logo} alt="" className='bg-[#6A55EA] rounded-2xl' />
                <p className='md:w-[449px] pt-10 pb-10'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                
            </div>
           <div className='flex flex-wrap md:gap-x-25 gap-x-13'>
             <div>
                <ul className='flex flex-col gap-5'>
            <li>
              <a href="#" className='text-2xl font-semibold'>Features</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Home</a>
            </li>
            <li>
              <a href="#" className='text-lg'>About</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Benifit</a>
            </li>
            
            <li>
              <a href="#" className='text-lg'>Price</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Blog</a>
            </li>
          </ul>
            </div>


            <div>
                <ul className='flex flex-col gap-5'>
            <li>
              <a href="#" className='text-2xl font-semibold'>Products</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Task Management</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Company growth</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Time tracking</a>
            </li>
            
          </ul>
            </div>


            <div className='pb-15'>
                <ul className='flex flex-col gap-5'>
            <li>
              <a href="#" className='text-2xl font-semibold'>Support</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Customer service</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Accessibility</a>
            </li>
            <li>
              <a href="#" className='text-lg '>Contact us</a>
            </li>
            
          </ul>
            </div>
           </div>
       </div>
       <span>@20201 Innovate.All rights reserved.</span>

        </div>
    </section>
  )
}

export default Footer