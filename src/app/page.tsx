import Partners from '@/components/Partners'
import Title from '@/components/Title'
import BusinessFields from '@/components/BusinessFields'
import { getDiffYear } from '@/helpers/helpers'
import Image from 'next/image'
import HomeCard from '@/components/HomeCard'

export default function Home() {
  return (
    <main className="dark:bg-slate-800 bg-white container mx-auto border-x-[1px] dark:border-yellow-600 border-green-600">
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
      <div className='text-black dark:text-white w-3/4 sm:w-2/3 lg:w-[60rem] text-center mx-auto lg:text-lg text-sm'>
        <p className='pb-2'>
          <span className='inline-block leading-relaxed align-text-bottom transform scale-y-150 text-xl sm:text-2xl lg:text-3xl dark:text-yellow-600'>Fermeture Sans Souci</span>
          , votre Expert en Fermetures, Sécurité et Domotique en Essonne !
        </p>
        <p>
          Depuis <strong>{getDiffYear(1998)} ans</strong>, nous sommes spécialisés dans
          l&apos;installation de volets roulants, la pose de vérandas, la sécurisation de domicile et la domotique.
          Basés à Évry, nous garantissons des prestations soignées, respectant les délais.
        </p>
        <p className='mt-3'>
          N&apos;attendez plus, contactez-nous dès aujourd&apos;hui pour concrétiser votre projet en toute confiance!
          {/* Contactez-nous dès aujourd&apos;hui pour concrétiser votre projet en toute confiance ! */}
        </p>
      </div>
      <Title title='Réalisations' />
      <BusinessFields />
      <Title title='Partenaires' />
      <Partners />
    </main>
  )
}
