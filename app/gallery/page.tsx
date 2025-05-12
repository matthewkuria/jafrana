"use client";
import React, { useState } from 'react'
import Gallery from '../components/Gallery'
import Image from 'next/image'
import mainImage from "../../public/hero-image.jpeg"
import image1 from "../../public/home (1).jpeg"
import image2 from "../../public/home (2).jpeg"
import image3 from "../../public/home (3).jpeg"
import image4 from "../../public/home (4).jpeg"

const Page = () => {
  const [featuredImage, setFeaturedImage] = useState(mainImage)

  return (
    <main className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-8">Image Gallery</h1>
      <Gallery />
    </main>
  )
}

export default Page