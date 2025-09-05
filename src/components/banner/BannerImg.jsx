import React from 'react'
import Frame from '../../assets/frame.png'
import Frame1 from '../../assets/frame1.png'
import Frame2 from '../../assets/frame2.png'
import Frame3 from '../../assets/frame3.png'

const BannerImg = () => {
  return (
    <section>
        <div>
            <div className=' lg:flex gap-15 grid grid-cols-2  lg:justify-between max-w-[1320px] mx-auto md:px-50 px-15  pb-[100px]'>
                    <img src={Frame} alt="" />
                    <img src={Frame1} alt="" />
                    <img src={Frame2} alt="" />
                    <img src={Frame3} alt="" />
                </div>

        </div>
    </section>
     
  )
}

export default BannerImg