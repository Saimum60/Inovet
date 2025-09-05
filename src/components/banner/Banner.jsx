import React from 'react'
import Ban from "../../assets/ban.png"
import BgBan from '../../assets/bgban.png'



const Banner = () => {
  return (
    <section className='bg-cover pt-[14vh] ' style={{backgroundImage:`url(${BgBan})`}}>
        
        <div className='max-w-[1320px] mx-auto px-10 md:flex-row flex-col py-20'>
                <div className='flex justify-center gap-5 pb-10'>
                    <span className='border px-4 rounded-lg py-1 text-[rgba(255,255,255,0.5)]'>SEO</span>
                    <span className='border px-4 rounded-lg py-1 text-[rgba(255,255,255,0.5)]'>SMM</span>
                    <span className='border px-4 rounded-lg py-1 text-[rgba(255,255,255,0.5)]'>CRO</span>
                </div>
            <div className='flex flex-wrap justify-center'>
                <h2 className='text-white md:text-7xl text-4xl font-bold w-[967px] text-center'>Guaranteed increase of your  website sales</h2>
                <p className='text-[rgba(255,255,255,0.6)] w-[780px] mx-auto pt-[30px]'>With over 25 years of experience, we have crafted thousands of strategic discovery process  that enables us to peel back the layers which enable us to understand.</p>
               <div className=' pt-[48px]'>
                 <input type="text" name='text' placeholder='paste your website links' className='border-none md:w-[370px] pl-3 py-5 bg-white  rounded-l-2xl ' />
                 <button className='bg-[#6A55EA] text-white  px-4 py-5 rounded-r-2xl cursor-pointer '>
                    Analyze website
                 </button>
               </div>
            </div>
        </div>
            <div className='pb-150 bg-cover ' style={{backgroundImage:`url(${Ban})`}}>
               
            </div>
    </section>
  )
}

export default Banner