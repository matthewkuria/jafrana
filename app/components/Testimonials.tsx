"use client";
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import FontAwesome icons

const testimonials = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    feedback: " I took the construction services from Jafrana Construction Company recently and was amazed by their quality craftsmanship. They finished the work within the given timeframe without compromising quality.",
  },
  {
    id: 2,
    name: 'anna Apondi',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    feedback: 'If someone is searching for the best construction company for custom home building. Trust Jafrana Construction Company. They were really very easy to work with.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    feedback: 'The Jafrana Construction Company is the best construction company to do business with. When it comes to time and budget management, they are indeed the best. Highly recommended.',
  },
  {
    id: 4,
    name: 'bill Mwangi',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    feedback: 'The Jafrana Construction Company and the professional team were so wonderful, and the quality of their services was fantastic. ',
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