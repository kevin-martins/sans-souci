import { partners } from "../constants/partners";

const Partners = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-center pt-2'>
      {partners.map((partner, i) => {
        <img
          key={i}
          src={partner.url}
          alt={partner.alt}
          width={200}
          className='rounded-full'
        />
      })}
    </div>
  )
}

export default Partners