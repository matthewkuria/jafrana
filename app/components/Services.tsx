import React from 'react'

const Services = () => {
  return (
    <div className="">
          <div className="">
            <h1 className="text-center text-2xl md:text-4xl font-bold text-primary title">Our Services</h1>
            <p className="text-center text-secondary">We offer a wide range of services to meet your needs</p>
          </div>
          <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:p-10">
                    <div className="">
                        <h2 className="text-primary text-2xl font-bold">Construction</h2>
                        <p className="text-secondary">We offer a wide range of construction services to meet your needs</p>
                  </div>
                  <div className="">
                        <h2 className="text-primary text-2xl font-bold">Renovation</h2>
                        <p className="text-secondary">We offer a wide range of renovation services to meet your needs</p>
                  </div>
                  <div className="">
                        <h2 className="text-primary text-2xl font-bold">Interior Design</h2>
                        <p className="text-secondary">We offer a wide range of interior design services to meet your needs</p>
                  </div>
                  <div className="">
                        <h2 className="text-primary text-2xl font-bold">Landscaping</h2>
                        <p className="text-secondary">We offer a wide range of landscaping services to meet your needs</p>  
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Services