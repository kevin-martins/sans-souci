import React from 'react'
import { galeryImages } from '../constants/galery-pictures'

const PictureGallery = () => {
  const images = galeryImages

  return (
    <div className='overflow-x-hidden'>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-20 pb-10 gap-6'>
      {images.map((image, i) => (
        <>
          <img
            key={i}
            src={image.url}
            alt={image.url}
            className='galery-deformation hover:rounded-lg ease-out transition-all duration-500 scale-95 hover:scale-100'
          />
        </>
      ))}
      </section>
      
    </div>
  )
}
{/* <div className='relative z-0 flex items-center overflow-hidden rounded-lg scale-95
          transition-all duration-500
          
          before:absolute before:inset-0
          before:z-10 before:translate-x-[0%] before:translate-y-[0%] before:scale-[3]
          before:rounded-[100%] before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20
          before:transition-transform before:duration-1000
          before:content-[&quot;]

          hover:scale-100 hover:before:translate-x-[-250%] hover:before:translate-y-[-250%]'
        >
          <img
            key={i}
            src={image.url}
            alt={image.url}
            className='relative galery-deformation hover:rounded-lg ease-out transition-all duration-400'
          />
        </div> */}

export default PictureGallery;
