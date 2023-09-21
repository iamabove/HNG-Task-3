import React,{useState} from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const Authentication = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <div className='w-100 h-100'>
        {toggle ? <Login handleToggle={handleToggle}/> :<SignUp handleToggle={handleToggle}/>}
        
    </div>
  )
}

export default Authentication