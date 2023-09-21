import { projectAuth } from "../Firebase/config";

let error = null;


const logOut = async () => {
    error = null;

    try {
        await projectAuth.signOut()
    } catch (error) {
        error = error.message
    }
}

const userLogOut = () => {
    return {error, logOut}
}

export default userLogOut