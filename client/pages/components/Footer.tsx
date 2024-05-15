import Image from 'next/image'
import React from 'react'
import logo from '../assets/LOGO.svg'

type Props = {}


const Footer = (props: Props) => {
  return (
    <div>
      <div className='mt-16 bg-[#161c2d]'>
        <Image src={logo} alt="logo" width={300} height={300} />
      </div>
    </div>
  );
};

export default Footer