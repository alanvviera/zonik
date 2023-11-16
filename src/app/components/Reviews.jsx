import Image from 'next/image'
import React from 'react'

const clients = [
    {
      text: "Descubre nuestras últimas ofertas. ¡No te lo pierdas!",
      author_image: "./images/autor1.jpg",
      author: "Arturo Hernandez",
      ranking: '⭐',
      ranking_repeat: 4,
      company: "Mila Rose",
    },
    {
      text: "Explora nuevas oportunidades de aprendizaje. ¡Inscríbete ahora!",
      author_image: "./images/autor2.jpg",
      author: "Sick Blacky ",
      ranking: '⭐',
      ranking_repeat: 5,
      company: "Mila Rose",
    },
    {
      text: "Conoce los secretos del éxito. ¡Únete a nuestra comunidad!",
      author_image: "./images/autor3.jpg",
      author: "Athenea",
      ranking: '⭐',
      ranking_repeat: 3,
      company: "Ejemplo Company C",
    },
    {
      text: "Experimenta la innovación. ¡Descubre nuestras últimas creaciones!",
      author_image: "./images/autor4.jpg",
      author: "Dios Cenel",
      ranking: '⭐',
      ranking_repeat: 5,
      company: "Comentarios Psicologicos",
    },
  ];

const Reviews = () => {
  return (
    <div className='grid grid-cols-1 mx-auto max-w-screen-xl px-4 py-8  sm:py-12 sm:px-6 lg:py-16 lg:px-8 font-changa'>
  <h2 className='text-white text-center mb-8  font-changa font-bold text-3xl'>Reviews</h2>
  
      <div className='grid grid-cols-1 gap-8 text-white drop-shadow-xl  md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto'>
        
        {clients.map((client, index) => (
          <div className='p-1 bg-gradient-to-b from-red-100 to-purple-400 rounded-xl overflow-hidden'>
          <div key={index} className='h-full block rounded-xl border bg-black border-gray-800 p-8 shadow-xl transition'>
            <h3 className='mb-4'>{client.text}</h3>
            <div className='flex gap-4 text-lg items-center mt-4'>
              <div className='rounded-lg'>
              <Image src={`/${client.author_image}`} alt='Author Image' width='50' height='50' ></Image>
              </div>
              <div>
                <p className="mb-2">{client.ranking.repeat(client.ranking_repeat)}</p>
                <p className="mb-2">{client.author},</p>
                <p className="mb-2">{client.company}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
  
</div>

  )
}

export default Reviews