'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import Background from './Background';

const Banner = () => {

    const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Espera a que el componente se monte y luego muestra el banner
    setTimeout(() => {
      setShowBanner(true);
    }, 100); // Ajusta el retraso según tus necesidades
  }, []);

  return (
    <div className="bg-black p-4 shadow-md rounded-md">-
        <section className="bg-black text-white font-changa ">
            <div className="mx-auto my-auto max-w-screen-xl lg:flex  items-center md:flex rounded border border-white overflow-hidden ">
            <div className="mx-auto max-w-3xl text-center  p-10 drop-shadow-xl mt-9 mb-9  ">
                <h1
                className="bg-gradient-to-b from-red-100 to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                WHAT IS REAL? <br/>
                <div className="bg-gradient-to-l from-white via-gray-200 to-white bg-clip-text text-transparent border-gradient-to-l ">
                <span className="sm:block leading-normal "> Hay cosas sin sentido, todas con significado. <br/> </span>
                </div>
                </h1>
        
                <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Tu presente, es el mejor momento.
                </p>
        
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    className="block w-full rounded border border-white bg-white px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors duration-900 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    href="/portfolio"
                >
                    Portfolio
                </a>
        
                <a
                    className="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:bg-black sm:w-auto"
                    href="/contact"
                >
                    Contact
                </a>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Banner