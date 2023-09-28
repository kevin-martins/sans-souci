import { contacts } from '@/constants/contacts'
import Footer from '../components/Footer'
import GenerateForm from '../components/GenerateForm'
import Partners from '../components/Partners'
import Title from '../components/Title'
import Link from 'next/link'

// // Initialize and add the map
// function initMap(): void {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 4,
//       center: uluru,
//     }
//   );

//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;

const Contact = () => {
  return (
    <div className=''>
      {/* <img src="./assets/luxe.jpg" alt="" className='absolute h-screen top-0 left-0 w-full object-cover' /> */}
      <div className='flex flex-col lg:flex-row w-full relative z-10 min-w-[20rem] max-w-6xl mx-auto'>
        <div className='lg:w-full mx-auto lg:pt-5 lg:px-6 px-1 pb-4 mb-5 mx-2 h-max bg-gray-900/80 rounded'> {/* lg:mr-auto */}
          <Title title='Contact' defaultColor='text-white' />
          <div className='lg:text-lg sm:text-base text-xs text-white mt-5 mx-auto w-max pb-2'>
            <div className='flex flex-col md:grid md:grid-cols-2'>
              <p>Tel: </p>
              <Link href={contacts.tel.href} className='text-white hover:text-green-500 dark:hover:text-yellow-500 underline md:pl-0 pl-2'>
                {contacts.tel.value}
              </Link>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2'>
              <p>Adresse: </p>
              <Link href={contacts.location.href} className='text-white hover:text-green-500 dark:hover:text-yellow-500 underline md:pl-0 pl-2'>
                {contacts.location.value}
              </Link>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2'>
              <p>E-mail:</p>
              <Link href={contacts.mail.href} className='text-white hover:text-green-500 dark:hover:text-yellow-500 underline md:pl-0 pl-2'>
                {contacts.mail.value}
              </Link>
            </div>
          </div>
          <Partners />
        </div>
        {/* <div className='mx-auto max-w-lg'>
          <GenerateForm />
          <div className='p-4 mt-4 rounded-lg text-white text-xs bg-gray-900/80'>
            <p>
              Les données personnelles communiquées sont nécessaires aux fins de vous contacter. Elles
              sont destinées à Sans Souci et ses sous-traitants. Vous disposez de droits d&apos;accès
              de rectification, d&apos;effacement, de portabilité, de limitation, d&apos;opposition
              de retrait de votre consentement à tout moment et du droit d&apos;introduire
              une réclamation auprès d&apos;une autorité de contrôle, ainsi que d&apos;organiser
              le sort de vos données post-mortem. Vous pouvez exercer ces droits par voie postale à
              l&apos;adresse <span className='underline'>75 bd Fontainebleau 91100 Corbeil Essonnes</span>, ou par courrier électronique à
              l&apos;adresse <span className='underline'>fermetures.sans.souci@gmail.com</span>. Un justificatif d&apos;identité pourra vous être demandé.
              Nous conservons vos données pendant la période de prise de contact puis pendant la durée de
              prescription légale aux fins probatoire et de gestion des contentieux.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Contact
