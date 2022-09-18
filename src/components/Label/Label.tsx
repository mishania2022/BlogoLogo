import { Input } from "./styles"

interface IInput {
    type: string,
    placeholder: string,
    register: any
}

export const Label = ({ type, placeholder, register }: IInput) => {

    return (
        <label>
            <Input
                type={type}
                placeholder={placeholder}
                {...register}
            /></label>
    )
}
