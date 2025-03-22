import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/hero-image.jpeg'
const HeroSection = () => {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
         <div className="flex flex-col items-center justify-center gap-3  p-2">
            <h1 className="text-xl md:text-4xl font-semibold text-primary">Jafrana Construction company</h1>
            <p className="text-lg text-secondary">We build your dream home</p>
            <button className="bg-primary text-white px-4 py-2 rounded-lg">Get Started</button> 
        </div>
            <div className="flex flex-col items-center justify-center">
                <Image src={heroImage} alt="hero" width={500} height={500}
                className='h-[350px] shadow-primary rounded-md'/>
            </div>
    </div>
  )
}

export default HeroSection