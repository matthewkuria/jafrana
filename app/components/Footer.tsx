import React from 'react'
import SocialsLinks from './SocialsLinks'

export const  Footer = () => {
  return (
    <section className={`bg-slate-900 text-xs text-white p-1`}>
         <div className="flex flex-col md:flex md:flex-row mx-auto md:justify-between p-4">
                <div className="contact flex flex-col w-full items-center justify-center md:w-1/2">
                    <p className="title text-xl">About Us</p>
                    <div className="flex flex-col items-start justify-self-start w-full md:w-1/2">
                      <p className="">
                          Jafrana Construction Company is a construction
                          company that specializes in building residential
                          and commercial buildings. We have been in the construction
                          industry for over 10 years and have built a reputation for
                          quality workmanship and excellent customer service.
                      </p>
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
