import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/home (8).jpeg'
import { bebas_neue, redHatText } from '../fonts/fonts'
const WhoWeAre = () => {
    return (
    <div className=" flex flex-col-reverse md:flex md:flex-row md:justify-between  text-[13px] md:text-[16px] p-3 md:p-8">
            <div className="flex flex-col items-center justify-center p-2 relative m-1 ">
                <div className="absolute bg-primary w-[280px] h-[42px]  -top-2 -left-3 z-0"></div>
                <Image src={heroImage} alt="hero" width={500} height={500}
                    className='h-[300px] md:h-[350px] shadow-primary shadow-md z-20'/>
                <div className="absolute bg-primary w-[280px] h-[30px]  -bottom-3 -right-3 z-0"></div>
                <div className="absolute bg-tertiary w-[120px] h-[100px]  -bottom-3 -right-3 z-20 flex flex-col items-center justify-center">
                    <p className="text-primary text-xl md:text-3xl font-bold">10 <span className="text-quaternary text-base">+ years</span></p>
                    <p className="text-quaternary">Experience</p>
                </div>
            </div>
            <div className="flex flex-col justify-start  items-start  md:max-w-1/2 mt-5">
                <p className={`${bebas_neue.className} text-2xl text-primary`}>Who We Are</p>
                <p className={`${redHatText.className} font-bold`}>We Are The Best Construction Company</p>
                <p className="text-secondary">
                    At Jafrana Construction Company,
                    we are passionate about turning your visions into reality.
                    With years of experience in the construction industry,
                    we pride ourselves on delivering high-quality craftsmanship,
                    innovative designs, and exceptional customer service. Whether
                    it is building your dream home or creating a functional office space,
                    we are committed to excellence in every project we undertake.
                </p>
                
                <div className="my-5 flex justify-end w-full">
                    <button className="bg-primary text-white px-4 py-2  hover:outline-2 hover:text-primary hover:bg-quaternary hover:outline-solid">
                        Discover More
                    </button>
                </div> 
            </div>
    </div>
  )
}

export default WhoWeAre