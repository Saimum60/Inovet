import React from 'react'
import Utr from "../../assets/utr.png"
import Utr2 from "../../assets/utr2.png"
import Utr3 from "../../assets/utr3.png"
import Group from "../../assets/group.png"

const Process = () => {
  return (
    <section>
        <div className='max-w-[1320px] mx-auto px-10 py-20'>
            <div className='text-center pb-10'>
                <span className='text-xl text-[#7968EF] '> Our Process</span>
                <h2 className='md:text-5xl text-3xl font-semibold pt-5'>How Can We Help?</h2>
            </div>
            <div>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-8 text-center  '>
                                   <div className=' bg-[#F8A64C] gap-8 rounded-2xl relative after:absolute after:w-10 after:h-10 after:bottom-[10px] after:left-[120px] after:rotate-45 after:content-[""] after:bg-[#F8A64C] after:transition-all after:duration-500 after:z-[-1] lg:hover:after:bottom-[-20px] '>
                                    
                
                                    <div className='pt-5'>
                                        <img src={Utr} alt="" className='md:pl-25 pl-15' />
                                    
                                        <h5  className='text-xl text-white font-medium pb-10 pt-5 pl-5'>Real time analytics</h5>
                                    </div>
                                </div>
                                <div className=' bg-[#F0EDFF]  gap-8 rounded-2xl relative after:absolute after:w-10 after:h-10 after:bottom-[10px] after:left-[120px] after:rotate-45 after:content-[""] after:bg-[#F0EDFF] transition-all after:duration-500 after:z-[-1] lg:hover:after:bottom-[-20px] '>
                
                                    <div className='pt-5'>
                                        <img src={Utr2} alt=""  className='md:pl-25 pl-15 '/>
                                    
                                        <h5 className=' text-xl font-medium pt-5'>Social media stragedy</h5>
                                        
                                    </div>
                                </div>
                                <div className=' bg-[#E8FCF2]  gap-8 rounded-2xl relative after:absolute after:w-10 after:h-10 after:bottom-[10px] after:left-[120px] after:rotate-45 after:content-[""] after:bg-[#E8FCF2] transition-all after:duration-500 after:z-[-1] lg:hover:after:bottom-[-20px]  '>
                
                                    <div className='pt-5 '>
                                        <img src={Utr3} alt=""  className='md:pl-25 pl-15'/>
                                    
                                        <h5 className='text-xl font-medium pb-10 pt-5 pl-4'>Media management</h5>
                                       
                                    </div>
                                </div>
                                <div className='bg-[#FEF6EC] pt-27  rounded-2xl relative after:absolute after:w-10 after:h-10 after:bottom-[10px] after:left-[120px] after:rotate-45 after:content-[""] after:bg-[#FEF6EC] transition-all after:duration-500 after:z-[-1] lg:hover:after:bottom-[-20px] '>
                                        
                                    
                                        <h5 className='text-xl font-medium pl-4'>Reporting & analysis</h5>
                                       
                                    </div>
                                </div>
            </div>

            <div className='md:flex pt-25 justify-center '>
                <div>


                    <img src={Group} alt="" />
                </div>
                <div className='md:pl-20'>
                    <h3 className='text-3xl font-semibold'>Real time analytics</h3>
                    <p className='pt-8 pb-20 md:w-[496px]'>Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.Turn your visitors into customers with our team of experts. We'll analyze your website and develop a suitable conversion-rate strategy.</p>
                    <button className='bg-[#6A55EA] px-5 py-5 rounded-xl text-white cursor-pointer'>Analyze website</button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Process