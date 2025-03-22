import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/hero-image.jpeg'
import { bebas_neue } from '../fonts/fonts'
const HeroSection = () => {
    return (
    <div className=" flex flex-col-reverse md:flex md:flex-row md:justify-between  text-[13px] md:text-[16px] p-3 md:p-8 mt-16">
            <div className="flex flex-col justify-end   p-4 md:max-w-1/2 mt-5">
            <p className="text-secondary text-xs">Welcome to</p>
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
            <div className="flex flex-col items-center justify-center p-2 relative m-1 ">
                 <div className="absolute bg-primary w-[280px] h-[42px]  -top-2 -left-5 z-0"></div>
                <Image src={heroImage} alt="hero" width={500} height={500}
                    className='h-[350px] shadow-primary shadow-md z-20 ' />
                <div className="absolute bg-primary w-[280px] h-[30px]  -bottom-3 -right-3 z-0"></div>
            </div>
    </div>
  )
}

export default HeroSection