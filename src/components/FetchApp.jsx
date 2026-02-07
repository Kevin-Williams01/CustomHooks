// Importación del hook
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch"

export const FetchApp = () => {

    // Para probar los metodos PUT, PATCH y DELETE, agregar /{id} al final para cambiar ese registro en particular
    const url = 'https://jsonplaceholder.typicode.com/users';

    // useFetch recibe el url y devuelve data, isLoading y error
    const { data, isLoading, error, fetchData } = useFetch()

    // En caso de querer usar metodo POST, PUT o PATCH
    const body =  {
            name: 'foo',
            body: 'bar',
            userId: 1,
        }

    useEffect(() => {
        // Se manda URL, metodo, y body (si el metodo el PUT, PATCH o DELETE)
        fetchData(url, 'GET', body)
    }, [])


    return (
        <>
            <h3>Fetch App</h3>
            <h4>Lista de usuarios</h4>
            {isLoading
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    : <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            }
        </>
    )
}
