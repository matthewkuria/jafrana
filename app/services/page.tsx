import React from 'react'
import Image from 'next/image'
import { bebas_neue } from '../fonts/fonts'
import construction from '../../public/home (1).jpeg'
import renovation from "../../public/home (6).jpeg"
import interior_design from "../../public/home (2).jpeg"

const page = () => {
  return (
    <main className="services  flex  flex-col items-center justify-center w-full mt-20 text-[13px] text-primary">
      <h1 className={`${bebas_neue.className} text-3xl text-secondary underline decoration-secondary my-4`}>Services</h1>
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
      <aside className="p-5 bg-slate-50 flex flex-col items-center justify-center w-full mt-10 gap-3 mx-10">
        <h1 className={`${bebas_neue.className} text-3xl text-secondary underline decoration-secondary my-4`}>Why Choose Us?</h1>
        <p className="">We are a team of experienced professionals who are dedicated to providing the best services to our clients. We use the latest technology and techniques to ensure that our work is of the highest quality.</p>
        <p className="">We are committed to providing our clients with the best possible experience. We work closely with our clients to understand their needs and provide them with the best solutions.</p>
        <p className="">We offer competitive pricing and flexible payment options to make our services accessible to everyone.</p>
        <p className="">We are fully licensed and insured, so you can have peace of mind knowing that your project is in good hands.</p>
      </aside>
    </main>
  )
}

export default page