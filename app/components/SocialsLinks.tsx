import React from 'react'
import { SocialIcon } from 'react-social-icons'

const SocialsLinks = () => {
  return (
    <div className="grid grid-cols-4 md:gap-4 gap-1">
        <SocialIcon url="https://facebook.com" href="https://facebook.com" style={{ height: 30, width: 30 }}/>
        <SocialIcon url="https://youtube.com" style={{ height: 30, width: 30 }}/>
        <SocialIcon url="https://twitter.com" style={{ height: 30, width: 30 }}/>
        <SocialIcon url="https://instagram.com" style={{ height: 30, width: 30 }}/>
    </div>
  )
}

export default SocialsLinks