// Componente contador

// Importar hook
import { useCounter } from "../hooks/useCounter"


export const CounterApp = () => {

    // Importar los retornos del hook useCounter
    const {counter, add, reset, subtract} = useCounter(0)

    return (
        <>
            <h3>Contador</h3>
            <h4>{counter}</h4>
            <button className="btn btn-primary" onClick = {() => add()}>+1</button>
            <button className="btn btn-light" onClick = {() => reset()}>Reset</button>
            <button className="btn btn-danger" onClick = {() => subtract()}>-1</button>
        </>
    )
}
