import React from 'react'
import Image from 'next/image'
import { bebas_neue } from '../fonts/fonts'
import construction from '../../public/home (1).jpeg'
import renovation from "../../public/home (6).jpeg"
import interior_design from "../../public/home (2).jpeg"

const page = () => {
  return (
    <main className="services  flex  flex-col items-center justify-center w-full my-10 text-[13px] text-secondary">
      <h1 className={`${bebas_neue.className} text-3xl text-primary underline decoration-primary my-4`}>Services</h1>
      <article className='bg-quaternary flex flex-col md:flex md:flex-row items-center justify-around w-full gap-3'>
        <div className="service-card">
          <Image src={construction} alt="construction" width={200} height={200}
            className='rounded-md h-[200px] w-[300px] service-card-image'
          />
          <p className="services-title">Construction</p>
          <p className="">We offer a wide range of construction services to meet your needs.</p>
        </div>
        <div className="service-card">
          <Image src={renovation} alt="construction" width={200} height={200}
            className='rounded-md h-[200px] w-[300px] service-card-image'
          />
          <p className="services-title">Renovation</p>
          <p className="">We offer a wide range of renovation services to meet your needs.</p>
        </div>
        <div className="service-card">
          <Image src={interior_design} alt="construction" width={200} height={200}
            className='rounded-md h-[200px] w-[300px] service-card-image'
          />
          <p className="services-title">Interior Design</p>
          <p className="">We offer a wide range of interior design services to meet your needs.</p>
        </div>
      </article>
    </main>
  )
}

export default page