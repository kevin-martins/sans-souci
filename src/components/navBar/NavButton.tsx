import { Menu } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"
import { Link } from 'react-router-dom'
import { NavigationProps } from "../../models/navigation"
import NavOptions from "./NavOptions"

export const NavButton = ({ item }: { item: NavigationProps }): JSX.Element => {
  const navSelected = 'text-green-500 hover:text-green-500 shadow-inner-xl dark:bg-gray-900 dark:text-yellow-500 dark:hover:text-yellow-500'
  const navUnselected = 'text-black hover:text-black dark:text-white dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
  return (
    <Menu as="div" className="inline-block text-left my-auto">
      <div>
        {item.champs ?
          <Menu.Button
            className={
              `${item.current ? navSelected : navUnselected}
              inline-flex justify-center w-full px-4 py-2 text-sm font-medium rounded-md`
              }
            >
            {item.name}
            {item.champs && <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />}
          </Menu.Button> :
          <Link
            to={item.to}
            className={`${item.current ? navSelected : navUnselected}
            inline-flex justify-center w-full px-4 py-2 text-sm font-medium rounded-md`}
          >
            {item.name}
            {item.champs && <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />}
          </Link>
        }
      </div>
      {item.champs && <NavOptions champs={item.champs} />}
    </Menu>
  )
}

export default NavButton
