import React from 'react'
import Customer from '../../assets/customer3.jpg'
import Customer2 from '../../assets/customer4.jpg'
import Customer3 from '../../assets/customer5.jpg'

const Work = () => {

let reuse=card.map((item)=>(
    <div className=''>
        <div >
            <img src={item.image} alt="" className='rounded-xl'/>
        </div>
        <div>
            <h4 className='text-2xl font-medium py-5'>{item.name}</h4>
            <p>{item.para}</p>
        </div>

    </div>
))

  return (
    <section>
        <div className='max-w-[1320px] mx-auto px-10 py-20'>
            <div>
                <span className='text-xl text-[#7968EF] pl-2'>Our works</span>
            </div>
            <div className='flex justify-between items-center pt-5'>
                <h2 className='text-5xl font-semibold'>Our Case  </h2>
                <button className='border text-lg px-4 py-2 rounded-xl'>
                    <a href="#">View All</a>
                    </button>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 pt-10'>
                {reuse}
                

            </div>

        </div>
    </section>
  )
}

export default Work

let card =[
    {
        id:1,
        image:Customer,
        name:'Search marketer',
        para: 'Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.',
    },
    {
        id:2,
        image:Customer2,
        name:'Watching for trends',
        para: 'Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.',
    },
    {
        id:3,
        image:Customer3,
        name:'Cross over benifits',
        para: 'Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.',
    },
]