import React from 'react'
import Image from 'next/image'

const ImageBanner = () => {
  return (
    <div className=' relative w-full h-[300px]'>
        <Image src="/images/zonikbanner.jpg" layout="fill" objectFit="cover"/>
    </div>
    
  )
}

export default ImageBanner