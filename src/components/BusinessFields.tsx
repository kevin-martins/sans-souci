import { contacts } from "@/constants/contacts"
import { businessFields } from "@/constants/business-fields"
import { BusinessFieldsProps } from "@/models/business-fields"
import Link from "next/link"
import Image from "next/image"

type SlicedImageProps = {
  i: number
  url: string
  name: string
}

type ElementProps = {
  element: BusinessFieldsProps
  i: number
}

const SlicedImage = ({ i, url, name }: SlicedImageProps) => (
  <div
    className='w-full h-[22rem]
      md:relative md:h-[24rem]
      lg:min-w-[26rem] lg:max-w-[30rem]
    '
  >
    <Image
      className='my-auto object-cover rounded'
      src={url}
      alt={name}
      fill={true}
    />
    <svg
      className={`h-full top-0 absolute hidden lg:block h-full w-48 dark:text-gray-800 transform
        ${i % 2 === 0 ? 'lg:left-0 xl:-translate-x-1/2' : 'lg:right-0 xl:translate-x-1/3'}`}
      fill='currentColor'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
      aria-hidden='true'
    >
      {
        i % 2 === 0
          ? <polygon points='0,0 100,0 50,100 0,100' />
          : <polygon points='0,0 100,0 100,100 50,100' />
      }
    </svg>
  </div>
)

const Row = ({ element, i }: ElementProps) => (
  <div
    className='relative flex flex-col justify-center my-8
      md:flex-row
      lg:my-12 lg:mx-0
      xl:gap-12
    '
  >
    {
      i % 2 !== 0 &&
        <SlicedImage
          i={i}
          url={element.image}
          name={element.name}
        />
    }
    <div
      className='absolute transform top-1/2 -translate-y-1/2 z-10 rounded-lg text-center p-5 mx-1
        md:max-w-[45rem]
        lg:relative lg:w-[30rem] lg:text-left lg:my-auto lg:top-0 lg:translate-y-0
        bg-white/50 lg:bg-transparent
        dark:bg-black/50 dark:lg:bg-transparent
      '
    >
      <h1 className='tracking-tight font-extrabold text-black/90 dark:text-white'>
        <span className='block text-2xl sm:text-3xl lg:text-4xl'>
          {element.title}
        </span>
        <span className='block text-3xl sm:text-4xl lg:text-5xl text-green-500 dark:text-yellow-500'>
          {element.highlight}
        </span>
      </h1>
      <p
        className='text-black dark:text-white mt-4 lg:mt-6 text-base lg:text-lg mx-auto lg:mx-0'
      >
        {element.description}
      </p>

      <div className='flex flex-row pb-4 mt-5 sm:mt-8 gap-3'>
        <Link
          href={element.photos}
          className='text-sm font-medium rounded-md p-3 ml-auto
            sm:px-8 sm:py-3 sm:text-base
            md:py-4 md:px-10
            lg:m-0
            xl:text-lg
            text-white bg-green-600 hover:bg-green-700
            dark:bg-yellow-600 dark:hover:bg-yellow-600/80
          '
        >
          voir les photos
        </Link>    
        <Link
          href={contacts.tel.href}
          className='text-sm font-medium rounded-md p-3 mr-auto
            sm:px-8 sm:py-3 sm:text-base
            md:py-4 md:px-10
            xl:text-lg
            text-green-700 bg-green-100 hover:bg-green-200
            dark:text-yellow-700 dark:bg-yellow-100 dark:hover:bg-yellow-200
          '
        >
          {contacts.tel.value}
        </Link>
      </div>
    </div>
    {
      i % 2 === 0 &&
        <SlicedImage
          i={i}
          url={element.image}
          name={element.name}
        />
    }
  </div>
)

export const BusinessFields = (): JSX.Element => {
  return (
    <div
      className='grid w-full mx-auto mx-1 px-1
        md:px-5
        lg:w-full
      '
    >
      {businessFields.map((activity: BusinessFieldsProps, i: number) => (
        <Row key={i} element={activity} i={i} />
      ))}
    </div>
  )
}

export default BusinessFields