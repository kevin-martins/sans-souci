import { getIntervalYear } from "../helpers/helpers"
import { Redirections } from "../models/redirection"
import Redirection from "./Redirection"

const VerticalLine = () => <div className="w-0.5 bg-black/30 dark:bg-white/30" />

const HorizontalLine = () => <div className="h-[1px] bg-black/30 dark:bg-white/30 mt-20" />

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 pt-28 pb-20 mx-auto">
      <div className='flex lg:flex-row flex-col gap-12 max-w-6xl mx-auto'>
        <div className="w-full m-auto text-center">
          {/* <Image
            src={'/logo.png'}
            alt={'alt'}
            width={50}
            height={50}
          /> */}
          <Redirection to={Redirections.Address} className='text-black dark:text-white sm:text-lg' />
        </div>
        <VerticalLine />
        <div className="text-black dark:text-white w-full mx-auto flex flex-col">
          <h1 className="text-black dark:text-white text-2xl">Contact</h1>
          <Redirection to={Redirections.Phone} className="text-lg my-auto pl-5 pt-2 text-black dark:text-white" />
          <Redirection to={Redirections.Email} className="pl-5 text-lg text-black dark:text-white" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <HorizontalLine />
        <p className="text-center mt-4 text-black dark:text-white text-lg">&copy; {getIntervalYear()} Fermetures Sans Souci</p>
      </div>
    </footer>
  )
}

export default Footer
