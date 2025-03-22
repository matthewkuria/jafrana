import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/hero-image.jpeg'
import { bebas_neue } from '../fonts/fonts'
const HeroSection = () => {
    return (
    <div className=" flex flex-col-reverse md:flex md:flex-row md:justify-between  text-[13px] md:text-[16px] p-3 md:p-8">
            <div className="flex flex-col justify-end   p-4 md:max-w-1/2">
            <p className="text-secondary">Welcome to</p>
            <h1 className="flex flex-col text-xl md:text-4xl font-bold text-primary">Jafrana Construction Company</h1>
                <p className={`${bebas_neue.className} text-2xl`}>We build your dream home</p>
                <p className="text-secondary text-xs">We are experts who specializes in helping 
                    individuals and businesses to build their dream homes and offices.
                </p>
                <div className="my-4">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:outline-2 hover:text-primary hover:bg-quaternary hover:outline-solid">
                        Get Started
                    </button>
                </div> 
        </div>
            <div className="flex flex-col items-center justify-center p-2 relative ">
                <div className="absolute bg-primary w-[90px] h-[90px] rounded-full -top-10 -left-10"></div>
                <Image src={heroImage} alt="hero" width={500} height={500}
                className='h-[350px] shadow-primary shadow-md rounded-md'/>
            </div>
    </div>
  )
}

export default HeroSection