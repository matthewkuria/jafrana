import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import whatsappIcon from "../../public/whatsappIcon.png";

const WhatsappIcon = () => {
  return (
     <div className=" top-[75vh] right-4 p-2 z-50 fixed ">
              <Link href="https://api.whatsapp.com/send?phone=254722553222&text=Hello%20Jafrana%20Construction%20Company%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer"
              className="flex items-center"
              >
                <p className="text-[11px] bg-slate-100 px-1 rounded-md">Need help? <span className="font-bold ">Chat with us</span> </p>
                <Image alt='Whatsapp icon' src={whatsappIcon} height={60} width={60}
                className="animate-pulse" />
              </Link>
      </div>
  )
}

export default WhatsappIcon