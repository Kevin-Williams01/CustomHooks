import { useState } from "react"

export const useFetch = () => {

    // Valores iniciales de estado
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    // Desestructuración del state para enviar data, isLoading y error como objeto
    const { data, isLoading, error } = state;

    const fetchData = async (url, method, bodyData = null) => {
        if (!url) return
        try {

            const options = {
                method: method,
                // Sacado de la documentación de json placeholder
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                // El body va a ser nulo si el metodo es GET o DELETE
                body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
            }

            const res = await fetch(url, options)
            const data = await res.json()
            // Si funciona el try, setea la data a la respuesta del json y los errores en null
            setState({
                data,
                isLoading: false,
                error: null
            })
        } catch (error) {
            console.log(error);
            setState({
                data: null,
                error: error,
                isLoading: false
            })
        }
    }

    return {
        data,
        isLoading,
        error,
        fetchData
    }
}
