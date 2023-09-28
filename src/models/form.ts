export type FormOptionsProps = {
    required: string,
    min?: number,
    max?: number,
    pattern?: string,
}

export type FormProps = {
    id: string,
    name?: string,
    type: string,
    options: FormOptionsProps,
}