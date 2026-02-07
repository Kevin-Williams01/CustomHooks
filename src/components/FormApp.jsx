import { useForm } from "../hooks/useForm"

export const FormApp = () => {

    const initialForm = {
        // Valores iniciales del formulario
        username: '',
        email: '',
        password: ''
    }

    // Username, email y password ya están destructurados al haber sido eportado formState con spread operator
    const { username, email, password, onInputChange } = useForm(initialForm)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username, email, password);
    }

    return (
        <>
            <h3>Formulario</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={username}
                        onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onInputChange} />
                </div>
                <button type="submit" className="submitButton">Submit</button>
            </form>

        </>
    )
}
