import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../constants/routes';

const NavBar = () => {
  // const location = useLocation();
  const [navigation, setNavigation] = useState(routes)
  // navigation.forEach((nav) => {
  //   if (route.pathname.split('/')[1] === nav.to.split('/')[1]) {
  //     nav.current = true
  //   }
  // })

  return (
    <nav className="fixed z-50 left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 hover:border-neutral-500 bg-neutral-900 p-2 text-sm text-neutral-500">
      <svg width="24" height="auto" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 fill-neutral-50">
        <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" stop-color="#000000" />
        <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" stop-color="#000000" />
      </svg>
      <a href="#" rel="nofollow" className="block overflow-hidden">
        <div className="h-[20px]" style={{ transform: "none" }}>
          <span className="flex h-[20px] items-center">Home</span>
          <span className="flex h-[20px] items-center text-neutral-50">Home</span>
        </div>
      </a>
      <a href="#" rel="nofollow" className="block overflow-hidden">
        <div className="h-[20px]" style={{ transform: "none" }}>
          <span className="flex h-[20px] items-center">About</span>
          <span className="flex h-[20px] items-center text-neutral-50">About</span>
        </div>
      </a>
      <a href="#" rel="nofollow" className="block overflow-hidden">
        <div className="h-[20px]" style={{ transform: "none" }}>
          <span className="flex h-[20px] items-center">Pricing</span>
          <span className="flex h-[20px] items-center text-neutral-50">Pricing</span>
        </div>
      </a>
      <button className="
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[&quot;&quot;]
  
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100">Join waitlist</button></nav>
  )
}

export default NavBar