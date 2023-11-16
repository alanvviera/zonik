import React from 'react'
import ImageBanner from '../components/ImageBanner'

const page = () => {
  return (
    <div className='grid grid-cols-1 text-white font-changa '>  
        <ImageBanner/>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-4 md:mx-8 lg:mx-16 my-10 text-white'>
            <h className='flex justify-center items-center'>dsadsa</h>
            <h className='flex justify-center items-center'>dsadsa</h>
            <h className='flex justify-center items-center'>dsadsa</h>
        </div>
    </div>
    
    
  )
}

export default page