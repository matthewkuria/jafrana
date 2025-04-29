import React from 'react'
import SocialsLinks from './SocialsLinks'
import Link from 'next/link'
import Image from 'next/image'
import jafranaHomeLogo from "../../public/home-icon.png";
export const  Footer = () => {
  return (
    <section className={`relative bg-slate-900 text-xs text-white p-1`}>
         <div className="flex flex-col md:flex md:flex-row mx-auto md:justify-between p-4 items-baseline">
                <div className="contact flex flex-col w-full items-center justify-center md:w-1/2">
                    <div className="flex flex-col  w-full md:w-1/2 md:flex-row md:justify-between"> 
                        <div className="flex flex-col gap-4">
                          <p className="footer-title my-5 border-secondary border-b-1">Quick Links</p>
                          <Link href="/" className='hover:underline'>Home</Link>
                          <Link href="/services" className='hover:underline'>Services</Link>
                          <Link href="/gallery" className='hover:underline'>Gallery</Link>
                          <Link href="/projects" className='hover:underline'>Projects</Link>
                          <Link href="/contact-us" className='hover:underline'>Contacts</Link>
                
                      </div>
                        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-end"> 
                          <Image src={jafranaHomeLogo} alt="Jafrana construction logo" width={100} height={100} className="w-[100px] h-[100px] bg-amber-50 rounded-full" />
                        </div>
                    </div>
                </div>               
                <div className="support flex flex-col w-full md:w-1/4 justify-end mx-5 ">
                    <p className="footer-title my-5 border-secondary border-b-1">Contact Us</p>
                    <p className="text-center">Jafrana Construction Company</p>
                    <p className="text-center">P.O. Box 12780</p>
                    <p className="text-center">Nakuru, Kenya</p>
                    <p className="text-center">Tel: 0722553222</p>
                    <p className="text-center">Email:maishwanyeki4@gmail.com</p>
                    <p className="text-center">Location:Nakuru-Dundori Road, next to Rohi building.</p>
                  <p className="footer-title my-5 border-secondary  border-b-1">Follow us(Social Media)</p>  
                    <SocialsLinks/>
                </div>                
            </div>
          <div className="flex justify-center items-center text-xs p-4">
              <p className="">&copy;<span className='font-semibold px-0.5'>Jafrana Construction Company ||</span>2025. All rights reserved.</p>
          </div>
    </section>
  )
}
