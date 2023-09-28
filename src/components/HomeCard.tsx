import { contacts } from '@/constants/contacts'
import { options } from '@/constants/navigations'
import Link from 'next/link'
import React from 'react'

const HomeCard = () => {
  return (
    <div
      className='lg:w-[45rem] sm:w-[30rem] xs:w-[25rem] w-72 justify-self-center self-center
      text-center py-6 px-10 rounded select-none border-2 z-40
      hover:border-green-500 dark:hover:border-yellow-500 bg-gray-800/60 border-gray-800/80'
    >
      <Link
        href={contacts.tel.href}
        className='relative z-10 sm:text-xl text-sm text-white hover:text-green-500'
      >
        {contacts.tel.value}
      </Link>
      <h1 className='lg:text-8xl sm:text-6xl text-4xl text-white font-bold transform scale-y-125'>Fermetures</h1>
      <h2 className='dark:text-yellow-500 text-green-500 lg:text-6xl sm:text-4xl text-2xl font-bold'>
        Sans Souci
      </h2>
      <p className='lg:text-3xl sm:text-xl text-md text-white transform -skew-x-12'>depuis 1998</p>
      <div className='bg-green-600 dark:bg-yellow-600 w-24 mt-2 m-auto h-0.5' />
      <div className='text-white mx-auto rounded-lg mt-5 w-52 sm:w-96 sm:leading-relaxed leading-tight'>
        {options.map((option, i) => {
          return (
            <>
              <Link
                key={i}
                href={option.href}
                className='dark:hover:text-yellow-500 hover:text-green-500 sm:text-base text-sm'
              >
                {option.value}
              </Link>
              {i < options.length - 1 && ' - '}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default HomeCard