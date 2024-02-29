import { useScroll, useTransform } from 'framer-motion';
import React from 'react'

const ImageContent = ({ imageUrl, imageAlt, i }) => (
  <div className='lg:w-1/2 h-full'>
    <img
      className={`object-cover ${i % 2 === 0 ? 'picture-deformation-r rounded-r-lg' : 'picture-deformation-l rounded-l-lg'} `}
      src={imageUrl}
      alt={imageAlt}
    />
  </div>
)

const ScrollContent = ({ field, i }) => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div className='relative overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row my-20'>
      {i % 2 !== 0 && <ImageContent imageUrl={field.image} imageAlt={field.alt} i={i} />}
      <div className='relative z-10 lg:w-1/2 '>{/* pb-8 sm:pb-16 md:pb-20 */}
        {/* text */}
        {/* <div className='relative pt-6 sm:px-6 lg:px-8'>
          <div className='mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left '> */}
        <div className='flex flex-col h-full justify-center items-center text-center md:text-left'>
          <h1 className='text-4xl tracking-tight font-extrabold text-slate-100 sm:text-5xl xl:text-6xl'>
            <span className='block xl:inline'>
              {field.title}
              {' '}
            </span>
            <span className='block text-yellow-500 xl:inline'>
              {field.highlight}
            </span>
          </h1>
          <p className='mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 xl:text-xl lg:mx-0'>
            {field.description}
          </p>
          <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3'>
            <a
              href={field.photo}
              className="px-7 py-4 relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
                border-neutral-500 font-medium
                text-slate-100 transition-all duration-300
                before:absolute before:inset-0
                before:-z-10 before:translate-y-[200%]
                before:scale-[2.5]
                before:rounded-[100%] before:bg-yellow-600
                before:transition-transform before:duration-1000
                before:content-[&quot;&quot;]
                hover:scale-105 hover:border-yellow-600 hover:text-slate-300
                hover:before:translate-y-[0%]
                active:scale-100"
            >
              voir les photos
            </a>
            <a
              href={field.photo}
              className="px-7 py-4 relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
                border-yellow-600 font-medium
                text-slate-300 transition-all duration-300
                before:absolute before:inset-0
                before:-z-10 before:translate-y-[0%]
                before:scale-[2.5]
                before:rounded-[100%] before:bg-yellow-600
                before:transition-transform before:duration-1000
                before:content-[&quot;&quot;]
                hover:scale-105 hover:border-neutral-500 hover:text-slate-100
                hover:before:translate-y-[-200%]
                active:scale-100"
            >
              prendre contact
            </a>
            {/* <a
              href={field.photo}
              className='w-content flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 md:py-4 xl:text-lg md:px-10'
            >
              {field.name}
            </a> */}
            {/* <a
              href={field.contact}
              className='w-content flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-green-700 dark:text-yellow-700 bg-green-100 hover:bg-green-200 dark:bg-yellow-100 dark:hover:bg-yellow-200 md:py-4 xl:text-lg md:px-10'
            >
              {field.name}
            </a> */}
          </div>
        </div>
      </div>
      {i % 2 === 0 && <ImageContent imageUrl={field.image} imageAlt={field.alt} i={i} />}
    </div >
  )
}

export default ScrollContent