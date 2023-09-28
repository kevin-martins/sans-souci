import { Switch as Switcher } from '@headlessui/react'

type Props = {
  value: boolean
  setter: any
}

const Switch = ({ value, setter }: Props): JSX.Element => {
  const onChange = () => {
    // console.log(value)
    if (value === true) return setter(false)
    return setter(true)
  }
  return (
    <Switcher
      checked={value}
      onChange={onChange}
      className={`${'bg-green-600 dark:bg-yellow-600'}
      relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${value ? 'translate-x-6' : 'translate-x-0'} bg-white dark:bg-gray-800
        pointer-events-none inline-block h-5 w-5 rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}
      />
    </Switcher>
  )
}

export default Switch
