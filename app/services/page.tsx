import React from 'react'
import Image from 'next/image'
import { bebas_neue } from '../fonts/fonts'
import construction from '../../public/home (1).jpeg'

const page = () => {
  return (
    <section className="services min-h-screen flex  flex-col items-center justify-center w-full">
      <h1 className={`${bebas_neue.className} text-3xl text-quaternary underline decoration-primary`}>Services</h1>
      <article className='bg-quaternary grid grid-cols-1 md:grid-cols-3 gap-5 p-5 w-full md:w-3/4'>
        <div className="service-card">
          <Image src={construction} alt="construction" width={200} height={200}
            className='rounded-md'
          />
          <p className="title">Construction</p>
          <p className="">We offer a wide range of construction services to meet your needs.</p>
        </div>
        <div className="service-card">
          <Image src={construction} alt="construction" width={200} height={200}
            className='rounded-md'
          />
          <p className="title">Renovation</p>
          <p className="">We offer a wide range of renovation services to meet your needs.</p>
        </div>
        <div className="service-card">
          <Image src={construction} alt="construction" width={200} height={200}
            className='rounded-md'
          />
          <p className="title">Interior Design</p>
          <p className="">We offer a wide range of interior design services to meet your needs.</p>
        </div>
      </article>
    </section>
  )
}

export default page