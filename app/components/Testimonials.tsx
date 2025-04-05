"use client";
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'This service was amazing! Highly recommend to everyone.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'A fantastic experience from start to finish.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    feedback: 'Professional and efficient. Could not ask for more!',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-slate-100 p-4 flex flex-col items-center justify-center mt-10">
      <p className="title text-2xl">Client Testimonials</p>
      <div className="relative w-full max-w-3xl mt-6">
        
        <div className="mt-8 space-y-6 relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
            onClick={() => {
              const container = document.querySelector('.testimonials-container');
              if (container) {
          container.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
          >
            &#8592;
          </button>
          <div className="testimonials-container overflow-x-auto flex space-x-6">
            {testimonials.map((testimonial) => (
              <div
          key={testimonial.id}
          className="bg-white p-4 rounded shadow-md text-center flex-shrink-0 w-80"
              >
          <div className="img-container">
            <img
              src={`/images/testimonials/${testimonial.id}.webp`}
              alt={`${testimonial.name}'s photo`}
              className="w-16 h-16 rounded-full mx-auto mb-4"
              id="person-img"
            />
          </div>
          <p className="text-lg font-semibold text-secondary">{testimonial.name}</p>
          <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
            onClick={() => {
              const container = document.querySelector('.testimonials-container');
              if (container) {
          container.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;