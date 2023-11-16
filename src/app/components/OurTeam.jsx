import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const OurTeam = () => {
  return (
    <div className='grid grid-cols-1 text-white font-changa mx-auto max-w-screen-xl'>
    <h2 className='flex items-center justify-center text-3xl font-bold my-10'>Our Team</h2>
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-4 md:mx-8 lg:mx-16 my-10 text-white'>
      <div className='flex justify-center'>
        <Image src="/images/team.jpg" alt='ZONIK TEAM' width='600' height='200'/>
      </div>
      <div className='grid grid-rows-3 mt-5 md:mt-0 md:mr-5 lg:mr-10 ml-3'>
        <p>🌠Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Cupiditate, illum. Eligendi laboriosam eos aperiam. Placeat 
           nihil laudantium commodi delectus porro earum? Omnis qui ipsam 
           fugit sapiente explicabo cumque eius illo.</p>
        <p>🌠Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Cupiditate, illum. Eligendi laboriosam eos aperiam. Placeat 
        nihil laudantium commodi delectus porro earum? Omnis qui ipsam 
        fugit sapiente explicabo cumque eius illo.</p>
        <p>🌠Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Cupiditate, illum. Eligendi laboriosam eos aperiam. Placeat 
        nihil laudantium commodi delectus porro earum? Omnis qui ipsam 
        fugit sapiente explicabo cumque eius illo.</p>
      </div>
    </div>
  </div>
  
  )
}

export default OurTeam