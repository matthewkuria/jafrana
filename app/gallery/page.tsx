"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import mainImage from "../../public/hero-image.jpeg"
import image1 from "../../public/home (1).jpeg"
import image2 from "../../public/home (2).jpeg"
import image3 from "../../public/home (3).jpeg"
import image4 from "../../public/home (4).jpeg"

const Page = () => {
  const [featuredImage, setFeaturedImage] = useState(mainImage)

  return (
    <div className="min-h-screen p-4">
      {/* Featured Image Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Featured Image</h1>
        <div className="relative">
          <Image
            width={800}
            height={400}
            className="h-auto max-w-full rounded-lg shadow-lg"
            src={featuredImage}
            alt="Featured Image"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
            <p>Our Latest Project</p>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[image1, image2, image3, image4].map((image, index) => (
            <div key={index} onClick={() => setFeaturedImage(image)} className="cursor-pointer">
              <Image
                width={300}
                height={300}
                className="h-auto max-w-full rounded-lg shadow-md"
                src={image}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page