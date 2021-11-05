import { login } from "../../Redux/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleClick = () => {
        dispatch(login ({ email, password}));
    }

    return (
        <div>
            <form >
                <input onChange={handleChangeEmail} type="text" />
                <input onChange={handleChangePassword} type="text" />
                <button type='button' onClick={handleClick}>Login</button>   
            </form> 
        </div>
    )
}

export default Login
