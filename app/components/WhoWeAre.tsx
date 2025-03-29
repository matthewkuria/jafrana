import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/home (8).jpeg'
import whyUsImage from '../../public/home (1).jpeg'
import { bebas_neue } from '../fonts/fonts'
import Link from 'next/link'
const WhoWeAre = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-white text-secondary p-5 md:p-10">
            <h3 className="text-primary text-2xl font-bold title">About Us</h3>
            <div className=" flex flex-col-reverse md:flex md:flex-row md:justify-between  text-[13px] md:text-[16px] p-3 ">
                <div className="flex flex-col items-center justify-center p-2 relative m-1 ">
                    <div className="absolute bg-secondary w-[280px] h-[36px]  -top-2 -left-3 z-0"></div>
                    <Image src={heroImage} alt="hero" width={550} height={200}
                        className='h-[200px] md:h-[300px] shadow-secondary shadow-xs z-20'/>
                    <div className="absolute bg-secondary w-[280px] h-[20px]  -bottom-3 -right-3 z-0"></div>
                    <div className="absolute bg-primary w-[120px] h-[80px]  -bottom-3 -right-3 z-20 flex flex-col items-center justify-center">
                        <p className="text-secondary text-xl md:text-3xl font-bold">10 <span className="text-quaternary text-base">+ years</span></p>
                        <p className="text-quaternary">Experience</p>
                    </div>
                </div>
            <div className="flex flex-col justify-start  items-start  md:max-w-1/2 mt-5">
                <p className={`${bebas_neue.className} text-2xl text-secondary`}>Who We Are</p>
                <p className="text-black font-semibold">We Are The Best Construction Company</p>
                <p className="text-tertiary">
                    At Jafrana Construction Company,
                    we are passionate about turning your visions into reality.
                    With years of experience in the construction industry,
                    we pride ourselves on delivering high-quality craftsmanship,
                    innovative designs, and exceptional customer service. Whether
                    it is building your dream home or creating a functional office space,
                    we are committed to excellence in every project we undertake.
                </p>
                
                <div className="my-5 flex justify-end w-full">
                    <Link href="/services" className="bg-secondary text-white px-4 py-2  hover:outline-2 hover:text-secondary hover:bg-quaternary hover:outline-solid">
                        Discover More
                    </Link>
                </div> 
            </div>
            </div>
            <article className="flex flex-col md:flex-row items-start justify-center md:justify-between bg-white text-tertiary p-5">
                <div className="flex flex-col justify-start  items-start  md:max-w-1/2 mt-5">
                    <p className={`${bebas_neue.className} text-2xl text-secondary`}>Why Choose Us</p>
                    <p className="text-primary font-semibold">Client Satsifaction</p>
                    <p className="text-tertiary text-base">
                    At Jafrana Construction Company,
                    Our clients are at the heart of everything we do.
                    We strive to exceed expectations by understanding
                    their unique needs and delivering tailored solutions.
                    Your satisfaction is our priority, and we are dedicated
                    to building lasting relationships based on trust and excellence.
                    </p>
                    <p className="text-primary font-semibold">Quality Workmanship</p>
                    <p className="text-tertiary text-base">
                        We take pride in our attention to detail and commitment to delivering superior quality in every project. 
                        Our skilled craftsmen and use of premium materials ensure that your construction project stands the test of time.
                    </p>
                    
                </div>
                <div className="flex flex-col items-center justify-center p-2 relative m-1 md:max-w-1/2">
                    <Image src={whyUsImage} alt="hero" width={900} height={500}
                        className='h-[200px] md:h-[300px]  z-20'/>
                </div>
                
            </article>
    </section>
    
  )
}

export default WhoWeAre