import React from 'react'
import PriceReuse from './PriceReuse'
import { GoCheckbox } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";


const Price = () => {
  return (
    <section>
        <div className='max-w-[1320px] mx-auto px-10 py-20 pb-30'>
            <div className="lg:text-center">
                <a href="#" className='text-2xl font-medium text-[#7968EF]'>Our pricing</a>
                <h3 className='lg:text-5xl text-3xl  font-semibold pt-[14px] pb-[60px]'>Premium optimization plans</h3>
            </div>
           <div className="grid lg:grid-cols-4 md:grid-cols-2">

            
             
              <div className=' flex flex-col gap-10'>
                <div className='w-70 h-2 bg-[#D2EAFD] rounded-full'></div>
                <h5 className='text-2xl font-medium w-[279px] pb-2'>Save up to 40% by paying annually!</h5>
                <span className='text-2xl font-semibold bg-[#EFF4F899] py-5'>Keywords result</span>
                <span className='text-2xl font-semibold'>Territories</span>
                <span className='text-2xl font-semibold bg-[#EFF4F899] py-4'>Search by time</span>
                <span className='text-2xl font-semibold'>Api access</span>
                <span className='text-2xl font-semibold bg-[#EFF4F899] py-4'>Competition metrics</span>
                <span className='text-2xl font-semibold'>Reports</span>
                

            </div>
             <div>
                <div className='pb-10  '>
                    <div className='w-70 h-2 bg-[#323232] rounded-full'></div>
                </div>
                <PriceReuse textone='Personal ' te='Free'  two='Top 1,000' three='Top 6' icon={<IoCloseOutline/>} className='text-red-500 ' />
                <div className="pt-10 text-center">
                  <button className='text-white px-26 py-7 bg-black inline-block duration-800 hover:scale-110' >Try for free</button>
                </div>
             </div>
             <div className=''>
                 <div className='pb-10'>
                    <div className='w-70 h-2 bg-[#43CB83] rounded-full'></div>
                </div>
                <PriceReuse textone='Professional' te='$59/Monthly'  two='5,000' three='13' icon={<IoCloseOutline/>} className='text-red-500'/>
                <div className="pt-10 text-center">
                  <button className='text-white px-28 py-7 bg-[#43CB83] inline-block duration-800 hover:scale-110'>Buy now</button>
                </div>
             </div>
             <div>
                <div className='pb-10'>
                    <div className='w-70 h-2 bg-[#845A9F] rounded-full'></div>
                </div>
                <PriceReuse textone='Enterprice' te='$299/Monthly' two='10,000' three='200+' icon={<GoCheckbox />}/>
                <div className="pt-10 text-center">
                  <button className='text-white px-28 py-7 bg-[#845A9F] inline-block duration-800 hover:scale-110'>Buy now</button>
                </div>
             </div>
             
           </div>
          

        </div>
    </section>
  )
}

export default Price