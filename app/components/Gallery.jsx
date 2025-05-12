'use client';
import React from 'react';
import LightGallery from 'lightgallery/react';
import Image from 'next/image';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';



const images = [
  { src: '/home (1).jpeg', alt: 'Image 1', thumb: '/home (1).jpeg' },
  { src: '/home (2).jpeg', alt: 'Image 2', thumb: '/home (2).jpeg' },
  { src: '/home (3).jpeg', alt: 'Image 3', thumb: '/home (3).jpeg' },
  { src: '/home (4).jpeg', alt: 'Image 4', thumb: '/home (4).jpeg' },
  { src: '/home (5).jpeg', alt: 'Image 5', thumb: '/home (5).jpeg' },
  { src: '/home (6).jpeg', alt: 'Image 6', thumb: '/home (6).jpeg' },
  { src: '/home (7).jpeg', alt: 'Image 7', thumb: '/home (7).jpeg' },
  { src: '/home (8).jpeg', alt: 'Image 8', thumb: '/home (8).jpeg' },
  { src: '/home (9).jpeg', alt: 'Image 9', thumb: '/home (9).jpeg' },
];



export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <LightGallery
        speed={500}
        plugins={[lgZoom, lgThumbnail, lgAutoplay, lgFullscreen]}
        autoplay={{ autoplay: true, pause: 2000 }}
        showCloseIcon={true}
        progressBar={true}
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image.src}
            className="group relative overflow-hidden rounded-lg"
            data-sub-html={`<h4>${image.alt}</h4>`}
            aria-label={`View ${image.alt} in lightbox`}
          >
             <div className="relative w-full aspect-[16/9]">
            <Image
              src={image.src}
              alt={image.alt}              
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="/placeholder.jpg" // Optional: Add a low-res placeholder
            />
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}