import axios from "axios"

const defaultValue = {
    token : null,
    userinfo : {} 
}

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const GET_USERS_INFO = "GET_USERS_INFO" 

export default function AuthReducer (state = defaultValue, {type, payload}) {
    switch (type){
        case LOGIN: return{...state, token: payload};
        case LOGOUT: return defaultValue;
        case GET_USERS_INFO: return {...state, userinfo: payload};
        default: return state;
    }
};

export const login = ({email, password}) => async (dispatch) => {

    try{

        const res = await axios.post ('https://back-sandbox.herokuapp.com/api/auth/login', {
            email,
            password
        })
        dispatch({type: LOGIN, payload: res.data})
    }catch( error ){
        alert (error)
    }
}