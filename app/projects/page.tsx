import React from 'react'
import { bebas_neue } from '../fonts/fonts'

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[450px] lg:min-h-[490px] projects">
          <div className="bg-secondary  py-1 px-4 md:px-4 lg:px-6 lg:py-2 mix-blend-multiply ">
            <p className={`${bebas_neue.className} text-quaternary text-3xl md:text-4xl lg:text-5xl `}>Projects</p>
          </div>
    </main>
  )
}

export default page