type Props = {
    title: string
    defaultColor?: string
}

const Title = ({ title, defaultColor = 'text-black dark:text-white' }: Props): JSX.Element => (
    <div className='w-full mt-8 mb-12 transform'>
        <h2 className={`${defaultColor} text-5xl w-max mx-auto skew-x-12`}>{title}</h2>
        <div className='bg-green-600 dark:bg-yellow-600 w-44 mt-3 m-auto h-0.5' />
    </div>
)

export default Title