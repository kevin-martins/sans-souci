import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { businessFields } from '../constants/business-fields'
import React, { useRef } from 'react'

const ImageContent = ({ imageUrl, imageAlt, i }) => (
  <div className='lg:w-1/2 h-full'>
    <img
      className={`object-cover ${i % 2 === 0 ? 'picture-deformation-r rounded-r-lg' : 'picture-deformation-l rounded-l-lg'} `}
      src={imageUrl}
      alt={imageAlt}
    />
  </div>
)

const ContentElement = ({ field, i }) => {
  const wrapperRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'center center']
  })
  const fromRight = useTransform(scrollYProgress, [0, 1], ['-20%', '0%'])
  const fromLeft = useTransform(scrollYProgress, [0, 1], ['20%', '0%'])

  return (
    <motion.div
      className='relative overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row'
      ref={wrapperRef}
      // initial='hidden'
      // variants={elementVariants}
      // transition={{ delay: 0.3 }}
      style={{ translateX: i % 2 !== 0 ? fromRight : fromLeft }}
    >
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
          </div>
        </div>
      </div>
      {i % 2 === 0 && <ImageContent imageUrl={field.image} imageAlt={field.alt} i={i} />}
    </motion.div >
  )
}

const ScrollContent = () => {
  return (
    <motion.section
      className='flex flex-col gap-12 my-20'
    >
      {businessFields.map((field, i) => (
        <ContentElement key={i} field={field} i={i} />
      ))}
    </motion.section>
  )
}

export default ScrollContent;

const elementVariants = {
  hidden:{ opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0
  }
}