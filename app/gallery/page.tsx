import React from 'react'
import Image from 'next/image'
import mainImage from "../../public/hero-image.jpeg"
import image1 from "../../public/home (1).jpeg"
import image2 from "../../public/home (2).jpeg"
const page = () => {
  return (
<div className="grid gap-4 min-h-screen">
    <div>
        <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src={mainImage} alt="default image"/>
    </div>
    <div className="grid grid-cols-5 gap-4">
        <div>
            <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src={image1} alt=""/>
        </div>
        <div>
            <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src={image2} alt=""/>
        </div>
        
    </div>
</div>

  )
}

export default page