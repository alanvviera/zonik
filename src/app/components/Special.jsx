'use client'
import React from 'react'
import Link from 'next/link'
import ServiceCards from './ServiceCards'



export default function Special(){
    return(
<section className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 font-changa">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl text-white">Es hora de atreverse</h2>

      <p className="mt-4 text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
        saepe laborum.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
     <ServiceCards titulo ={'Renders 3D'} texto= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'}/>
     <ServiceCards titulo ={'Producción audiovisual.'} texto= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'}/>
     <ServiceCards titulo ={'Fotografía'} texto= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'}/>
     <ServiceCards titulo ={'Páginas web.'} texto= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'}/>
     <ServiceCards titulo ={'Espacios artísticos'} texto= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'}/>
     <ServiceCards titulo ={'Producción de eventos'} texto= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'}/>
    </div>

    <div className="mt-12 flex justify-center">
      
        <a
          href="#"
          className="inline-block font-changa rounded bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    
  </div>
</section>
    )
}
