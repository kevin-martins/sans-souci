import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { Link } from 'react-router-dom'
import { NavigationOptionsProps } from "../../models/navigation"

export const NavOptions = ({ champs }: { champs: NavigationOptionsProps[] }): any => {
  // const route = useRouter()
  // champs.forEach((champ: NavProps) => {
  //   if (route.pathname === champ.href) {
  //     champ.current = true
  //   }
  // })
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute w-56 mt-5 bg-white dark:bg-gray-800 rounded-md shadow-lg">
        {champs.map((champ: NavigationOptionsProps) => (
          <div key={champ.name} className="px-1 py-1">
            <Link to={champ.to} className='text-white'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && 'hover:bg-gray-300 dark:hover:bg-gray-700'}
                    text-black dark:text-white border-white dark:border-gray-800 group flex rounded-md items-center w-full px-2 py-3 text-sm border `}
                  >
                    {champ.name}
                  </button>
                )}
              </Menu.Item>
            </Link>
          </div>
        ))}
      </Menu.Items>
    </Transition>
  )
}

export default NavOptions
