import React,{useState} from 'react'
import userLogin from '../auth/userLogin'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = ({handleToggle}) => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate()

    const location = useLocation()

    const from = location.state?.from?.pathname || "/gallery";

    const {error,login} = userLogin()

    const handleLogin = async (e) => {
        e.preventDefault()
        await login(email, password)
        if (!error) {
            navigate(from, {replace: true})
            setEmail("")
            setPassword("")
        } else {
            setErrorMessage(error)
        }
    }
  return (
    <div className='w-100  h-100 d-flex flex-column justify-content-center align-items-center'>
        <h1>Login In</h1>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='enter password'value={password} onChange={(e) => setPassword(e.target.value)}/>
            {error && <p>{errorMessage}</p>}
            <button type='submit'>Login</button>
        </form>
        <p>Have no account?</p>
        <button onClick={handleToggle}>SIGN UP</button>
    </div>
  )
}

export default Login