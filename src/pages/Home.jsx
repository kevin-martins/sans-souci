import React, { useEffect, useRef } from 'react'
import MovingCard from '../components/MovingCard'
import HomeCard from '../components/HomeCard'
import Footer from '../components/Footer'
import ScrollContent from '../components/ScrollContent'
import HorizontalScroll from '../components/HorizontalScroll'
import SwipeCarousel from '../components/test'
import Partners from '../components/Partners'

const Home = () => {
  return (
    <>
      <div className="grid w-full h-screen place-content-center px-4 py-20">
        <MovingCard>
          <HomeCard />
            {/* <Button text='connexion' onClick={onClick} /> */}
          {/* <>
            <h1 className='text-white text-center py-5 text-3xl'>SOTNFT</h1>
          </> */}
        </MovingCard>
      </div>
      <div class="w-full mt-8 mb-12 transform">
        <h1 class="text-slate-100 text-5xl w-max mx-auto skew-x-12">l'Entreprise</h1>
        <div class="bg-yellow-600 w-44 mt-3 m-auto h-0.5"></div>
      </div>
      <p class="text-slate-300 w-2/3 text-center mx-auto lg:text-lg text-sm">
        Sans Souci, votre spécialiste pour effectuer la pose de volets roulants en Essonne ! 
        Confiez-nous votre projet et profitez de nos 26 années d'expériences dans ce domaine 
        pour assurer la sécurité de votre habitation. Forts de notre expérience, nous réalisons 
        également votre installation domotique, que vous soyez sur Évry ou dans l'Essonne. 
        Nous vous garantissons plusieurs prestations soignées réalisées dans le respect des 
        délais pour vous apporter entière satisfaction. Nous sommes à votre écoute. Contactez-nous !
      </p>
      <ScrollContent />
      {/* <SwipeCarousel /> */}
      {/* <HorizontalScroll /> */}
      <Partners />
      <Footer />
    </>
  )
}

export default Home
