import Link from 'next/link'
import React from 'react'

const MobileTypeButton = ({ nav }: any) => {
  return (
    <Link
      key={nav.name}
      href={nav.to}
      className={`${nav.current ?
      'text-green-500 hover:text-green-500 shadow-inner-xl dark:bg-gray-900 dark:text-yellow-500 dark:hover:text-yellow-500' :
      'text-black hover:text-black dark:text-white dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700'}
      block px-3 py-2 rounded-md text-base font-medium w-60`}
      aria-current={nav.current ? 'page' : undefined}
    >
      {nav.name}
    </Link>
  )
}

export default MobileTypeButton