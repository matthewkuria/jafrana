"use client";
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import FontAwesome icons

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-slate-100 p-4 flex flex-col items-center justify-center mt-10">
      <p className="title text-2xl">Client Testimonials</p>
      <div className="relative w-full max-w-3xl mt-6">
        
        <div className="mt-8 space-y-6 relative">
          <div className="testimonials-container flex justify-center">
            <div
              key={testimonials[currentIndex].id}
              className="bg-white p-4 rounded shadow-md text-center flex-shrink-0 w-80"
            >
              <div className="img-container">
                <img
                  src={testimonials[currentIndex].img}
                  alt={`${testimonials[currentIndex].name}'s photo`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                  id="person-img"
                />
              </div>
              <p className="text-lg font-semibold text-secondary uppercase">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600 mt-2">{testimonials[currentIndex].feedback}</p>
            </div>
          </div>
        </div>
        {/* prevs and next button */}
        <div className="flex justify-around mt-4">
          <button
            className="bg-gray-300 p-2 rounded-full shadow-md mx-2 text-secondary hover:bg-gray-400 transition-colors duration-200"
            onClick={handlePrev}
          >
            <FaArrowLeft /> {/* FontAwesome left arrow */}
          </button>
          <button
            className="bg-gray-300 p-2 rounded-full shadow-md mx-2 text-secondary hover:bg-gray-400 transition-colors duration-200"
            onClick={handleNext}
          >
            <FaArrowRight /> {/* FontAwesome right arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;