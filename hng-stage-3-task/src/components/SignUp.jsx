import React, { useState } from "react";
import userSignUp from "../auth/userSignUp";
import { useNavigate, useLocation } from "react-router-dom";

const SignUp = ({handleToggle}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()
  const location = useLocation()

  const {error, signUp} = userSignUp()

  const handleSignOut = async (e) => {
    e.preventDeafault();

    await signUp(email, password)

    if(!error) {

        navigate(from, {replace: true})
        setEmail("")
        setPassword("")

        return
    } else {
        setErrorMessage(error)
    }

  }
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignOut}>
        <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        {error && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Have an account?</p>
      <button onClick={handleToggle}>LOGIN</button>
    </div>
  );
};

export default SignUp;
