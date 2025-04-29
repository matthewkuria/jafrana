import React from 'react'
import { playfairDisplay } from '../fonts/fonts'

const page = () => {
  return (
    <main className=" flex flex-col p-1 mt-20">
      <section className="flex flex-col items-center justify-end md:justify-center min-h-[300px] md:min-h-[450px] lg:min-h-[490px] projects">
          <div className="bg-slate-900  py-1 px-4 md:px-4 lg:px-6 lg:pt-3 lg:pb-4 my-5">
            <p className={`${playfairDisplay.className} text-secondary text-3xl md:text-4xl lg:text-5xl `}>Our Projects</p>
          </div>      
    </section>
    <article className="flex flex-col items-center justify-center w-3/4 md:w-1/2 mx-auto mt-10 mb-10 text-center border-secondary border-l-2"> 
        <p className="p-2">
          At Jafrana Construction Works we provide a comprehensive building service which is delivered through our experienced teams meeting the needs of all clients operating across a wide range of markets.
        </p>  
        
        <p className="">
          Our projects are a testament to our commitment to quality and excellence. We take pride in our work and strive to exceed our clients expectations.
        </p>  
        <p className=" mt-4 mb-4">
          Here are some of our recent projects:
        </p>
      </article>

      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-[80vh] grid grid-cols-10 grid-rows-4 gap-2 p-2 bg-slate-300">
           <a href="#apartment" 
                    className="relative col-span-10 sm:col-span-4 sm:row-span-4 
                                group rounded-lg overflow-hidden bg-cover bg-center 
                                flex items-center justify-center shadow-xl hover:shadow-2xl"
                    style={{ backgroundImage: "url('/home (9).jpeg')" }}>
                    <span className="absolute bottom-0 w-full backdrop-blur-md bg-opacity-60 
                                    text-white text-lg text-center py-2 opacity-100 sm:opacity-0 
                                    sm:group-hover:opacity-100 transition-opacity">
                        Apartment
                    </span>
              </a>

                    <a href="#interior" 
                    className="relative col-span-10 sm:col-span-4 sm:row-span-2 
                                group rounded-lg overflow-hidden bg-cover bg-center 
                                flex items-center justify-center hover:shadow-lg"
                    style={{ backgroundImage: "url('/hero-image.jpeg')" }}>
                    <span className="absolute bottom-0 w-full backdrop-blur-md bg-opacity-60 
                                    text-white text-lg text-center py-2 opacity-100 sm:opacity-0 
                                    sm:group-hover:opacity-100 transition-opacity">
                       Interior Design
                    </span>
                    </a>

                    <a href="#bungalow" 
                    className="relative col-span-10 sm:col-span-2 sm:row-span-2 
                                group rounded-lg overflow-hidden bg-cover bg-local bg-bottom 
                                flex items-center justify-center"
                    style={{ backgroundImage: "url('/home (1).jpeg')" }}>
                    <span className="absolute bottom-0 w-full backdrop-blur-md bg-opacity-60 
                                    text-white text-lg text-center py-2 opacity-100 sm:opacity-0 
                                    sm:group-hover:opacity-100 transition-opacity">
                      Bungalow
                    </span>
                    </a>

                    <a href="#rentals" 
                    className="relative col-span-10 sm:col-span-6 sm:row-span-2 
                                group rounded-lg overflow-hidden bg-cover bg-local bg-center
                                flex items-center justify-center"
                    style={{ backgroundImage: "url('/home (8).jpeg')" }}>
                    <span className="absolute bottom-0 w-full backdrop-blur-xs bg-opacity-60 
                                    text-white text-lg text-center py-2 opacity-100 sm:opacity-0 
                                    sm:group-hover:opacity-100 transition-opacity">
                        Rentals
                    </span>
                </a>
        </div>
      </section>
      
    </main>
  )
}

export default page