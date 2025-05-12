"use client";
import React, { useState } from 'react'
import Gallery from '../components/Gallery'


const Page = () => {

  return (
    <main className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-8">Image Gallery</h1>
      <Gallery />
    </main>
  )
}

export default Page