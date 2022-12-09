import auth_types from "./types/auth";

const init_state = {
    username : "",
    role: ""
}

const auth_reducer = (state = init_state, action) =>{
    if(action.type = auth_types.AUTH_LOGIN){
        let a = { ...action.payload }
        return {
            ...state,
            username: a.username,
            role: a.role
        };
        
    } else if (action.type = auth_types.AUTH_LOGOUT){
        return init_state
    }

    return state
}

export default auth_reducer