import React from 'react'
import Group from "../../assets/gro.png"
import Up from "../../assets/up.png"
import Up2 from "../../assets/up2.png"
import Up3 from "../../assets/up3.png"

const Feature = () => {
  return (
    <section>
        <div className='max-w-[1320px] mx-auto px-10 py-20'>
            <div className='text-center'>
                <a className='text-2xl text-[#7968EF] ' href="#">Core feature</a>
                <h4 className='md:text-5xl text-2xl font-bold pt-5 md:pl-80 md:pr-80'>Provide awsome service with our tools</h4>
            </div>
            <div className='md:grid grid-cols-2  pt-20'>
                <div>
                    <p className='text-[#29313D] md:w-[620px] md:pl-10 pl-5 pb-15'>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.</p>
                    <img src={Group} alt="" className='pb-5 max-w-full'/>
                </div>
                <div className='flex flex-wrap gap-8 md:pl-10'>
                   <div className='flex bg-[#F0EDFF] md:pl-10 md:pb-0 pb-4 gap-8 rounded-2xl'>

                    <div className='pt-5'>
                        <img className='bg-[#7968EF] px-5 py-5 rounded-full' src={Up} alt=""  />
                    </div>
                   
                    <div className='pt-5 pr-15'>
                        <h5  className='md:text-3xl text-xl font-semibold md:pb-3 pb-1'>SEO Consultancy</h5>
                        <p className='md:w-[350px] w-[250px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                    </div>
                </div>
                <div className='flex bg-[#FEF6EC] md:pb-0 pb-4 gap-8 rounded-2xl'>

                    <div className='pt-5 md:pl-10 '>
                        <img src={Up2} alt=""  className='bg-[#F8A64C] px-5 py-5 rounded-full'/>
                    </div>
                   
                    <div className='pt-5 pr-15'>
                        <h5 className='md:text-3xl text-xl font-semibold md:pb-3 pb-2'>Competitor analysis</h5>
                        <p className='md:w-[350px] w-[250px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                    </div>
                </div>
                <div className='flex bg-[#E8FCF2] md:pl-10 md:pb-0 pb-4 gap-8 rounded-2xl'>

                    <div className='pt-5 '>
                        <img src={Up3} alt=""  className='bg-[#63DE9D] px-5 py-5  rounded-full'/>
                    </div>
                   
                    <div className='pt-5 pr-15'>
                        <h5 className='md:text-3xl text-xl font-semibold md:pb-3 pb-2'>Social media marketing</h5>
                        <p className='md:w-[350px] w-[250px]'>Nam Tibero Tempore, Cum Soluta Nobis Est Eligendi Optio Cumque  </p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Feature