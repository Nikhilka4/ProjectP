import React from 'react'
import ServicesCards from './ServicesCards'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className='h-[calc(80vh_-_107px)] mt-10 mx-[70px]'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-[30px] font-bold'>Services we offer you</p>
            <p className='max-w-[700px] text-center text-[18px] text-[#999697]'>We at Pranavi PEB Construction, are actively engaged in the design, engineering, fabrication and erection of pre-engineered metal building systems.</p>
        </div>
        <ServicesCards />
    </div>
  )
}

export default Services