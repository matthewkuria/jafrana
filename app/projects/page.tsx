import React from 'react'
import { bebas_neue } from '../fonts/fonts'

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen projects">
          <p className={`${bebas_neue.className} text-secondary text-3xl md:text-6xl `}>Projects</p>
    </main>
  )
}

export default page