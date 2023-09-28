import { FieldErrors, useForm, useWatch } from 'react-hook-form'
import { capitalize } from '../helpers/helpers'
import { FormProps } from '../models/form'

type Props = {
    data: FormProps,
    register: any
    getValues?: any
    errors: any
}

const ErrorMessage = ({ error }: any) => (
    error && <p className="text-red-600">{error.message}</p>
)

const Radio = ({ data, register, errors }: Props) => (
    <>
        {data.options && data.options.required && <span className='text-red-400 text-lg mr-1'>*</span>}
        <input
            type={data.type}
            id={data.id}
            value={data.id}
            className='mr-1 bg-yellow-600'
            {...register(data.id, { ...data?.options })}
        />
        <label
            htmlFor={data.id}
            className='text-white'
        >
            {"En cochant cette case, j'accepte les conditions particulières ci-dessous**"}
        </label>
        <ErrorMessage error={errors[data.id]} />
    </>
)

const TextAreaCount = ({ getValues, element }: { getValues: any, element: string}) => {
    // const count = getValues("root." + element)
    return (
        <>
            {/* <p>Whatch: {count.length}</p> */}
        </>
    )
}

const TextArea = ({ data, register, getValues, errors }: Props) => {
    // useEffect(() => {
    //     const array = useWatch((data.id) => console.log(value, name, type))
    //     return array.length
    //   }, [register])
    // const watchFields = useWatch([data.type, "number"]);
    return (
        <>
            {data.options && data.options.required && <span className='text-red-400 text-lg mr-1'>*</span>}
            <label
                htmlFor="message"
                className='text-white mr-2'
            >
                {data.id}
            </label>
            <textarea
                id={data.id}
                name={data.type}
                className={`${
                    data?.options && Object.keys(data.options).includes(errors[`${data.id}`]?.type) ?
                    'border-red-600' : 'hover:border-green-500 dark:hover:border-yellow-500'
                } w-full h-8 pl-2 text-lg rounded outline-0 border-[3px]`}
                {...register(data.id, { ...data?.options })}
            />
            <TextAreaCount getValues={getValues} element={data.id} />
            <ErrorMessage error={errors[data.id]} />
        </>
    )
}

const Input = ({ data, register, errors }: Props) => {
    return (
        <>
            {data.options && data.options.required && <span className='text-red-400 text-lg mr-1'>*</span>}
            <label
                htmlFor={data.id}
                className='text-white mr-2'
            >
                {data.name || capitalize(data.id)} :
            </label>
            <input
                type={data.type}
                id={data.id}
                name={data?.name || capitalize(data.id)}
                className={`${data?.options && Object.keys(data.options).includes(errors[`${data.id}`]?.type) ?
                'border-red-600' : 'hover:border-green-500 dark:hover:border-yellow-500'}
                 w-full h-8 pl-2 text-lg rounded outline-0 border-[3px]`}
                {...register(`${data.id}`, { ...data?.options })}
            />
            {errors[data.id] && <p className="text-red-600">{errors[data.id].message}</p>}
        </>
    )
}

const GenerateInputs = ({ data, register, errors }: Props) => {
    if (data.options?.required.length === 0) data.options.required = `Veuillez préciser votre '${data.id}'`
    if (data.type === "text") return <Input data={data} register={register} errors={errors} />
    else if (data.type === "radio") return <Radio data={data} register={register} errors={errors} />
    else if (data.type === "area") return <TextArea data={data} register={register} errors={errors} />
    return <></>
}

const GenerateForm = () => {
    const formElements = [
        { id: "nom", type: "text", options: { required: '' } },
        { id: "prenom", type: "text", options: { required: '' } },
        { id: "téléphone", type: "text", options: { required: '', pattern: '' } },
        { id: "e-mail", type: "text", options: { required: '', pattern: '' } },
        { id: "message", type: "area", options: { required: '', min: 10 } },
        { id: "condition", type: "radio", options: { required: 'Veuillez accepter les conditions' } },
    ]
    const { register, getValues, handleSubmit, formState: { errors } } = useForm({ mode: 'onSubmit' })

    const onSubmit = (data: any) => {
        console.log(data)
    }
    // console.log(errors)
    return (
        <form
            action="mailto:kev.martinsvieira@gmail.com"
            method="get"
            // encType="text/plain"
            onSubmit={handleSubmit(onSubmit)}
            className='mx-2 bg-gray-900/80 rounded-xl px-10 py-10'
        >
            <a href='mailto:fermetures.sans.souci@gmail.com' target="_blank" rel="noreferrer">
                <p className='text-white hover:text-green-500 dark:hover:text-yellow-500 underline pb-2'>envoyer un email</p>
            </a>
            {formElements.map((element: FormProps, i: number) => {
                return (
                <GenerateInputs key={i} data={element} register={register} getValues={getValues} errors={errors} />
                )
            })}
            <div className="w-max ml-auto">
                <button
                    type="submit"
                    className="bg-white text-center px-8 py-1 rounded text-lg mt-4 hover:bg-orange-400"
                >
                    Envoyer
                </button>
            </div>
        {/* <Button /> */}
        </form>
    )
}

export default GenerateForm