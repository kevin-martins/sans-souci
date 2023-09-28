import { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, useLocation } from 'react-router-dom'
import NavButton from './NavButton'
import Switch from '../Switch'
import { NavigationOptionsProps, NavigationProps } from '../../models/navigation'
import { Redirections } from '../../models/redirection'
import Redirection from '../Redirection'
import MobileTypeButton from './MobileTypeButton'

const NavBar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: any }): JSX.Element => {
  const location = useLocation();
  const navigationOptions: NavigationProps[] = [
    { name: 'Accueil', to: '/', current: false },
    // {
    //   name: "Secteur d'activité", to: '/realisations', current: false, champs: [
    //     { name: 'Alarmes et Domotique', to: '/realisations/alarmes-et-domotique', current: false },
    //     { name: 'Portes et Portails', to: '/realisations/portes-et-portails', current: false },
    //     { name: 'Volets roulants', to: '/realisations/volets-roulants', current: false },
    //     { name: 'Fenêtres', to: '/realisations/fenetres', current: false },
    //     { name: 'Vérandas', to: '/realisations/verandas', current: false },
    //     { name: 'Stores', to: '/realisations/stores', current: false },
    //   ]
    // },
    { name: 'Contact', to: '/contact', current: false },
  ]
  const [navigation, setNavigation] = useState<NavigationProps[]>(navigationOptions)

  useEffect(() => {
    const newNav = navigationOptions.map((nav: NavigationProps) => {
      console.log(location.pathname, nav.to)
      if (location.pathname === nav.to)
        return {
          ...nav,
          current: true,
        }
      return {
        ...nav,
        current: false,
      }
    })
    setNavigation(newNav)
  }, [location])

  return (
    <Disclosure as="nav" className="relative z-50 bg-white dark:bg-gray-800 shadow-xl sticky top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Start Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                {/* End Mobile menu button */}
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to='/'>
                      {/* <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      /> */}
                      <div className='hidden lg:flex'>
                        {/* <Image
                          src='/logo.png'
                          alt=''
                          width={50}
                          height={50}
                          // className='object-cover'
                        /> */}
                        {/* <img
                          className="h-8 w-auto"
                          src="/logo.png"
                          alt="Fermeture"
                        /> */}
                        <h1 className='text-black dark:text-white font-medium transform skew-x-12 text-xl ml-3'>Fermetures Sans Souci</h1>
                      </div>
                  </Link>
                </div>
                <div className="hidden lg:block md:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((nav) => (
                      <NavButton key={nav.name} item={nav} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="inset-y-0 right-50 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <Redirection to={Redirections.Phone} className="text-lg my-auto p-3 text-black dark:text-white" />
                <Switch value={darkMode} setter={setDarkMode} />
              </div>
            </div>
          </div>
          {/* Mobile menu navBar */}
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((nav: NavigationProps) => {
                // if (nav?.champs !== undefined) return nav?.champs.map((n: NavigationOptionsProps) => ( <MobileTypeButton key={n.name} nav={n} /> ))
                return <MobileTypeButton key={nav.name} nav={nav} />
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar