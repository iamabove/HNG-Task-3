import { projectAuth } from "../Firebase/config"; 



let error = null;

const login = async (email, password) => {
    error = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        error = null
        console.log(res.user)
    } catch (error) {
        error = error.message
        console.log(error)
    }

}

const userLogin = () => {
    return {error, login}
}


export default userLogin