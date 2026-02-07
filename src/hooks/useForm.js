// Hook del useForm para cualquier formulario

import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    // Desestructuración del target
    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }




    return {
        // Al agregar el spread operator a form state, hace que se exporte ya destructurado
        ...formState,
        onInputChange
    }
}
