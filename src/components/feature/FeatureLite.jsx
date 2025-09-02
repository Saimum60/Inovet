import React from 'react'
import Po from '../../assets/po.png'

const FeatureLite = () => {
  return (
    <section>
      <div className='max-w-[1320px] mx-auto px-10 md:py-20 py-10'>
        <div className='md:grid grid-cols-2'>
          <div className='md:pl-10'>
            <span className='text-xl text-[#7968EF]'>Core feature</span>
            <h2 className='text-3xl font-bold py-5'>Get More Traffic</h2>
            <p className='md:w-[496px] w-[400px]'>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.With over 25 years of experience, we have crafted thousands of strategic discovery process</p>
          </div>
          <div className='md:pt-0 pt-15'>
            <img src={Po} alt=""  />
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeatureLite