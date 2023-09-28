import Partners from '@/components/Partners'
import Title from '@/components/Title'
import BusinessFields from '@/components/BusinessFields'
import { getDiffYear } from '@/helpers/helpers'
import Image from 'next/image'
import HomeCard from '@/components/HomeCard'

export default function Home() {
  return (
    <main className="dark:bg-gray-800 bg-white">
      <div className='grid min-h-screen w-full'>
        <Image
          src='/assets/other.jpg'
          alt='luxe'
          fill={true}
          className='object-cover'
        />
        <HomeCard />
      </div>
      <Title title="l'Entreprise" />
      <div className='text-black dark:text-white sm:w-2/3 w-3/4 text-center mx-auto lg:text-lg text-sm'>
        <p className='pb-2'>
          <span className='inline-block leading-relaxed align-text-bottom transform scale-y-150 dark:text-yellow-600'>Fermeture Sans Souci</span>
          , votre Expert en Fermetures, Sécurité et Domotique en Essonne !
        </p>
        <p>
          Depuis <strong>{getDiffYear(1998)} ans</strong>, nous sommes spécialisés dans
          l&apos;installation de volets roulants, la pose de vérandas, la sécurisation de domicile et la domotique.
          Basés à Évry, nous garantissons des prestations soignées, respectant les délais.
        </p>
      </div>
      {/* <p className=''>
        <br/>
        <br/>
        Contactez-nous dès aujourd&apos;hui pour concrétiser votre projet en toute confiance !
      </p> */}
      <Title title='Réalisations' />
      <BusinessFields />
      <Title title='Partenaires' />
      <Partners />
    </main>
  )
}
