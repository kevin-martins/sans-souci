type Props = {
    type: 'submit' | 'reset' | 'button'
    text: string
}

export const Button = ({ type, text }: Props) => {
    return (
        <div className="w-max ml-auto">
            <button
                type={type}
                className="bg-white text-center px-8 py-1 rounded text-lg mt-4 hover:bg-green-500 dark:hover:bg-yellow-500"
            >
                {text}
            </button>
        </div>
    )
}

export default Button