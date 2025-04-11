import React from 'react'
import { playfairDisplay } from '../fonts/fonts'

const page = () => {
  return (
    <main className=" flex flex-col p-1">
      <section className="flex flex-col items-center justify-end md:justify-center min-h-[300px] md:min-h-[450px] lg:min-h-[490px] projects">
          <div className="bg-slate-900  py-1 px-4 md:px-4 lg:px-6 lg:pt-3 lg:pb-4 my-5">
            <p className={`${playfairDisplay.className} text-secondary text-3xl md:text-4xl lg:text-5xl `}>Our Projects</p>
          </div>      
    </section>
    <section className="flex flex-col items-center justify-center w-3/4 md:w-1/2 mx-auto mt-10 mb-10 text-center"> 
        <p className="border-secondary border-l-2">
          At Jafrana Construction Company we provide a comprehensive building service which is delivered through our experienced teams meeting the needs of all clients operating across a wide range of markets.
        </p>
      </section>
    </main>
  )
}

export default page