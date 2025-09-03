import React from 'react'
import Mask from '../../assets/mask.png'
import It from "../../assets/groe.png"

const Analytics = () => {
  return (
    <section>
        <div className='max-w-[1320px]  mx-auto px-10  py-20 bg-center bg-cover bg-blue-950 md:h-[50vh] h-[100vh] md:rounded-4xl'style={{backgroundImage:`url(${Mask})`}}>
            <div className='md:flex'>
                <img src={It} alt="" />
                <div>
                     <h2 className='text-white text-5xl font-bold pt-8'>Get your free seo analytics</h2>
                <p className='text-[rgba(255,255,255,0.61)] pt-5 md:w-[500px] mx-auto'>Paste your website link to get the free 7 days analytics of your website for totaly free</p>
                <div className=' pt-[48px] md:pl-8'>
                 <input type="text" name='text' placeholder='paste your website links' className='border-none md:w-[370px] pl-3 py-5 bg-white  rounded-l-2xl ' />
                 <button className='bg-[#6A55EA] text-white  px-4 py-5 rounded-r-2xl cursor-pointer '>
                    Analyze website
                 </button>
               </div>

                </div>
               
                </div>

        </div>
    </section>
  )
}

export default Analytics