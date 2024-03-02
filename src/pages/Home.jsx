import React, { useEffect, useRef } from 'react'
import MovingCard from '../components/MovingCard'
import HomeCard from '../components/HomeCard'
import Footer from '../components/Footer'
import ScrollContent from '../components/ScrollContent'
import HorizontalScroll from '../components/HorizontalScroll'
import SwipeCarousel from '../components/test'
import Partners from '../components/Partners'
import TextSection from '../components/TextSection'

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
      <TextSection
        title="l'Entreprise"
        text="Sans Souci, votre spécialiste pour effectuer la pose de volets roulants en Essonne ! 
          Confiez-nous votre projet et profitez de nos 26 années d'expériences dans ce domaine 
          pour assurer la sécurité de votre habitation. Forts de notre expérience, nous réalisons 
          également votre installation domotique, que vous soyez sur Évry ou dans l'Essonne. 
          Nous vous garantissons plusieurs prestations soignées réalisées dans le respect des 
          délais pour vous apporter entière satisfaction. Nous sommes à votre écoute. Contactez-nous !"
      />
      <ScrollContent />
      {/* <SwipeCarousel /> */}
      {/* <HorizontalScroll /> */}
      <TextSection
        title='Partners'
          text="Voici un aperçu des entreprises avec lesquelles nous collaborons, chacune étant 
            un expert reconnu dans son domaine respectif. Elles s'engagent à offrir le meilleur 
            rapport qualité-prix, soutenu par des garanties pouvant s'étendre sur plus de 10 ans."
      />
      <Partners />
      <Footer />
    </>
  )
}

export default Home
