"use client";
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    feedback: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    feedback: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    feedback: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    feedback: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-slate-100 p-4 flex flex-col items-center justify-center mt-10">
      <p className="title text-2xl">Client Testimonials</p>
      <div className="relative w-full max-w-3xl mt-6">
        
        <div className="mt-8 space-y-6 relative">
          <div className="testimonials-container overflow-x-scroll flex  space-y-6">
            {testimonials.map((testimonial) => (
              <div
          key={testimonial.id}
          className="bg-white p-4 rounded shadow-md text-center flex-shrink-0 w-80"
              >
            <div className="img-container">
            <img
              src={testimonial.img}
              alt={`${testimonial.name}'s photo`}
              className="w-16 h-16 rounded-full mx-auto mb-4"
              id="person-img"
            />
            </div>
            <p className="text-lg font-semibold text-secondary uppercase">{testimonial.name}</p>
            <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-300 p-2 rounded-full shadow-md mx-2 text-secondary hover:bg-gray-400 transition-colors duration-200"
            onClick={() => {
                
            }}
          >
            &#8592;
          </button>
          <button
            className="bg-gray-300 p-2 rounded-full shadow-md mx-2 text-secondary hover:bg-gray-400 transition-colors duration-200"
            onClick={() => {
              
            }}
          >
            &#8594;
          </button>
        </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;