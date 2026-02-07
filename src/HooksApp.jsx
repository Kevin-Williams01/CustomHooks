// importar componente del contador
import { CounterApp } from "./components/CounterApp"
// Importar componente del formulario
import {FormApp } from "./components/FormApp"
// Importar componente de Fetch
import { FetchApp } from "./components/FetchApp"

export const HooksApp = () => {
    // Solo con copiar y pegar el boton de la pagina de boostrap, se incorpora con el CSS ya hecho
    // Hay que cambiar 'class' a 'className' por convenciones de React
    return (
        <>
            <h1>Aplicación de Hooks</h1>
            <button type="button" className="btn btn-success">Success</button>

            <hr />
            <CounterApp />

            <hr />
            <FormApp/>
            
            <hr />
            <FetchApp/>

        </>
    )
}
