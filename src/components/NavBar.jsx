import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../constants/routes';
import { LuMail, LuPhoneCall } from "react-icons/lu";
import { contacts } from '../constants/contacts';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

const underlineVariants = {
  open: {
    transform: 'scaleX(1)'
  },
  close: {
    transform: 'scaleX(0)'
  }
}

const cardVariants = {
  open: {
    opacity: 1,
    transform: 'translateY(0px) translateX(-50%)',
  },
  close: {
    opacity: 0,
    transform: 'translateY(15px) translateX(-50%)',
  }
}

const NavBarElement = () => {
  const [onHover, setOnHover] = useState(true)

  const handleHover = () => {
    setOnHover(true)
  }

  const handleLeave = () => {
    setOnHover(false)
  }

  return (
    <motion.div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="relative h-fit w-fit"
    >
      <a href="#" className="relative">
        Nos Réalisations
        <motion.span
          variants={underlineVariants}
          animate={onHover ? 'open' : 'close'}
          className="absolute -bottom-2 -left-2 -right-2 h-px origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {onHover &&
          <motion.div
            variants={cardVariants}
            initial='close'
            animate='open'
            exit='close'
            className="absolute left-1/2 top-12 -translate-x-1/2 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
            <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
              <div className="col-span-12 flex flex-col justify-between bg-indigo-600 p-6 lg:col-span-4">
                <div className="mb-6">
                  <h2 className="mb-2 text-xl font-semibold text-white">Réalisations</h2>
                  <p className="text-sm text-slate-100">Découvrez par vous même le resultat d'un travail bien fait.</p>
                </div>
              </div>
              <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
              <section>
                <h3 className="font-semibold">Maison connectée</h3>
                <ul className="mt-3 space-y-3">
                  <li>
                    <Link to="/" rel="nofollow" className="block text-sm hover:underline" aria-label="Découvrir les systèmes domotiques">Systèmes Domotiques</Link>
                  </li>
                  <li>
                    <a href="#" className="block text-sm hover:underline" aria-label="Découvrir les digicodes">Digicodes</a>
                  </li>
                  <li>
                    <a href="#" className="block text-sm hover:underline" aria-label="Découvrir les alarmes">Alarmes</a>
                  </li>
                </ul>
              </section>
              <section className="space-y-3">
                <h3 className="font-semibold">Motorisations</h3>
                <a href="#" className="block text-sm hover:underline" aria-label="Découvrir les portes de garages">Porte de Garages</a>
                <a href="#" className="block text-sm hover:underline" aria-label="Découvrir les volets roulants solaires">Volet Roulant Solaire</a>
                <a href="#" className="block text-sm hover:underline" aria-label="Découvrir les volets roulants">Volet Roulants</a>
                <a href="#" className="block text-sm hover:underline" aria-label="Découvrir les pergolas">Pergolas</a>
                <a href="#" className="block text-sm hover:underline" aria-label="Découvrir les stores">Stores</a>
              </section>
              <section className="space-y-3">
                <h3 className="font-semibold">Fermetures</h3>
                <a href="#" className="block text-sm hover:underline" aria-label="Découvrir les fenêtres">Fenêtres</a>
                <a href="#" className="block text-sm hover:underline" aria-label="Découvrir les vitrines">Vitrines</a>
              </section>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>
  )
}

const NavBar = () => {
  const { scrollYProgress } = useScroll()
  return (
    // <nav className="fixed z-50 left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 hover:border-neutral-500 bg-neutral-900 p-2 text-sm text-neutral-500">
    //   <Link to="/">
    //     <svg width="24" length="auto" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 fill-neutral-50">
    //       <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" stopColor="#000000"></path>
    //       <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" stopColor="#000000"></path>
    //     </svg>
    //   </Link>
    //   <Link to="/" rel="nofollow" className="block overflow-hidden">
    //     <div className="h-[20px]" style={{ transform: "none" }}>
    //       <span className="flex h-[20px] items-center">Accueil</span>
    //       <span className="flex h-[20px] items-center text-neutral-50">Accueil</span>
    //     </div>
    //   </Link>
    //   <Link to="/galerie-photo" rel="nofollow" className="block overflow-hidden">
    //     <div className="h-[20px]" style={{ transform: "none" }}>
    //       <span className="flex h-[20px] items-center">Photos</span>
    //       <span className="flex h-[20px] items-center text-neutral-50">Photos</span>
    //     </div>
    //   </Link>
    //   <Link to="/galerie-photo" rel="nofollow" className="block overflow-hidden">
    //     <div className="h-[20px]" style={{ transform: "none" }}>
    //       <span className="flex h-[20px] items-center">Contact</span>
    //       <span className="flex h-[20px] items-center text-neutral-50">Contact</span>
    //     </div>

    //   </Link>

    // </nav>
    // bg-neutral-950/0 py-6 shadow-non | bg-neutral-950 py-3 shadow-xl
    <nav className={`fixed top-0 z-50 w-full px-6 text-white transition-all duration-300 ease-out lg:px-12 ${window.scrollY > .1 ? 'bg-neutral-950/0 py-6 shadow-non' : 'bg-neutral-950 py-3 shadow-xl'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">Fermeture Sans-Souci</span>
          <svg width="50" height="39" viewBox="0 0 50 39" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-10">
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" stop-color="white"></path>
            <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" stop-color="white"></path>
          </svg>
        </div>
        <div className="hidden gap-6 lg:flex">
          <div className="flex items-center gap-6">
            {/* <div className="relative h-fit w-fit">
              <a href="#" className="relative">
                About us
                <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out" />
              </a>
            </div>
            <div className="relative h-fit w-fit">
              <a href="#" className="relative">
                Pricing
                <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"></span>
              </a>
            </div> */}
            <NavBarElement />
            {/* <div className="relative h-fit w-fit">
              <a href="#" className="relative">
                Documentation
                <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out" />
              </a>
            </div> */}
          </div>
          <section className='flex gap-3'>
            {/* <a href={contacts.mail.to} className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
              border-violet-300 px-4 py-3 font-semibold
              uppercase text-violet-300 transition-all
              
              before:absolute before:inset-0
              before:-z-10 before:scale-[2.5]
              before:translate-x-[-150%] before:translate-y-[-150%]
              before:rounded-[100%] before:bg-violet-300
              before:transition-transform before:duration-500
              before:content-[&quot;&quot;]

              hover:scale-105 hover:text-neutral-900
              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-95"
            >
              <LuMail className='scale-150' />
              <span>envoyer un e-mail</span>
            </a>
            <a href={contacts.tel.to} className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
              border-violet-300 px-4 py-3 font-semibold
              uppercase text-violet-300 transition-all
              
              before:absolute before:inset-0
              before:-z-10 before:translate-x-[150%]
              before:translate-y-[150%] before:scale-[2.5]
              before:rounded-[100%] before:bg-violet-300
              before:transition-transform before:duration-500
              before:content-[&quot;&quot;]

              hover:scale-105 hover:text-neutral-900
              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-95"
            >
              <LuPhoneCall className='scale-150' />
              <span>{contacts.tel.value}</span>
            </a> */}
          </section>
        </div>
        <div className="block lg:hidden">
          <button className="block text-3xl">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
