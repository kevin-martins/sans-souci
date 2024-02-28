import React from 'react'

const ScrollContent = ({ field, i }) => {
  console.log(field)
  return (
    <div className={`relative overflow-hidden my-10`}>
      <div className={i % 2 === 0 ? 'max-w-7xl mx-auto' : 'flex flex-col lg:flex-row max-w-7xl mx-auto'}>
        <div className={`${i % 2 === 0 ? 'lg:absolute lg:inset-y-0 lg:right-0' : 'relative'} lg:w-1/2`}>
          <img
            className={`h-56 object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg ${i % 2 === 0 ? 'picture-deformation-l' : 'picture-deformation-r'} `}
            src={field.image}
            alt={field.alt}
          />
        </div>
        <div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-1/2'>
          {/* text */}
          <div className='relative pt-6 sm:px-6 lg:px-8'>
            <div className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
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
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <a
                      href={field.photo}
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 md:py-4 xl:text-lg md:px-10'
                    >
                      {field.name}
                    </a>
                  </div>
                  <div className='mt-3 sm:mt-0 sm:ml-3'>
                    <a
                      href={field.contact}
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 dark:text-yellow-700 bg-green-100 hover:bg-green-200 dark:bg-yellow-100 dark:hover:bg-yellow-200 md:py-4 xl:text-lg md:px-10'
                    >
                      {field.name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ScrollContent