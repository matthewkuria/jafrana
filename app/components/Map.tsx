import React from 'react'

const FindUsMap = () => {
  return (
    <section className="flex flex-col py-2 items-center justify-center my-3 bg-slate-100">
        <h2 className="title text-xl">Find Us</h2>
        <iframe
          className="w-full h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.231326433764!2d37.07505247320558!3d-0.9828408353660826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4d02e99dfd35%3A0x703ded4bcc0984a4!2sThika%20Greens%20Golf%20Resort!5e0!3m2!1sen!2ske!4v1741967962564!5m2!1sen!2ske"
          width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
  )
}

export default FindUsMap