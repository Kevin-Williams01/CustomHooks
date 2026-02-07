// Hook de contador

// Importar useState
import { useState } from "react"

// Valor inicial del contador = 0
export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)
    // Val permite modificar cuanto se suma. En este caso se suma de a 1
    const add = (val = 1) => {
        setCounter(counter + val)
    }
    // Resetea el contador al valor inicial (0)
    const reset = () => {
        setCounter(initialValue)
    }
    // Resta al contador el valor de val
    const subtract = (val = 1, allowNegatives = true) => {

        // Si no se permiten negativos, queda en 0
        if (!allowNegatives && counter < 1) return
        setCounter(counter - val)
    }
    
    
    // Exporta el contador, suma, reset y resta
    return {
        counter,
        add,
        reset,
        subtract
    }
}





