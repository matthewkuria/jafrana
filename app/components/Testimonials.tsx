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
        
        <div className="mt-8 space-y-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 rounded shadow-md text-center"
            >
              <img
              src={`/images/testimonials/${testimonial.id}.webp`}
              alt={`${testimonial.name}'s photo`}
              className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;