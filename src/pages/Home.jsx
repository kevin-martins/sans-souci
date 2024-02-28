import React from 'react'
import MovingCard from '../components/MovingCard'
import HomeCard from '../components/HomeCard'
import Footer from '../components/Footer'
import ScrollContent from '../components/ScrollContent'
import { businessFields } from '../constants/business-fields'

const Home = () => {
  return (
    <>
      <div className="grid w-full place-content-center px-4 py-20">
        <MovingCard>
          <HomeCard />
            {/* <Button text='connexion' onClick={onClick} /> */}
          {/* <>
            <h1 className='text-white text-center py-5 text-3xl'>SOTNFT</h1>
          </> */}
        </MovingCard>
      </div>
      <div className='py-20'>
        {businessFields.map((field, i) => (
          <ScrollContent key={i} field={field} i={i} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Home
