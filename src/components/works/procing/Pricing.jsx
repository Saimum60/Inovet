import React from 'react'
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Pricing = () => {

let premium = price.map((item)=>(
    <div>
        <h5 className='text-2xl font-semibold'>{item.name}</h5>
        <p className='text-xl font-medium py-10'>{item.text}</p>
        <p className='text-xl font-medium py-10'>{item.par}</p>
        <span className='text-xl font-medium py-10'>{item.searc}</span>
        <span className='text-xl font-medium py-10'>{item.api}</span>
        <span className='text-xl font-medium py-10'>{item.metric}</span>
        <span className='text-xl font-medium py-10'>{item.report}</span>
    </div>
))


  return (
    <section>
        <div className='max-w-[1320px] mx-auto px-10 py-20'> 
            <div className='grid grid-cols-4 justify-between '>
                {premium }
            </div>
        </div>
    </section>
  )
}

export default Pricing

let price=[
    {
        id:1,
        name:'Save up to 40% by paying annually!',
        text:'keywords result',
        par:'Territories',
        searc:'Search by time',
        api:'Api access',
        metric:'competition metrics',
        report:'Reports'

    },
    {
        id:2,
        name:'personal',
        text:'Top 1,000',
        par:'Top 6',
        searc:<IoIosCheckboxOutline />,
        api:<IoIosClose />,
        metric:<IoIosCheckboxOutline />,
        report:<IoIosCheckboxOutline />,

    },
    {
        id:3,
        name:'professional',
        text:'5,000',
        par:'13',
        searc:<IoIosCheckboxOutline />,
        api:<IoIosClose />,
        metric:<IoIosCheckboxOutline />,
        report:<IoIosCheckboxOutline />,

    },
    {
        id:4,
        name:'Enterprice',
        text:'10,000',
        par:'200+',
        searc:<IoIosCheckboxOutline />,
        api:<IoIosCheckboxOutline />,
        metric:<IoIosCheckboxOutline />,
        report:<IoIosCheckboxOutline />,

    },
]