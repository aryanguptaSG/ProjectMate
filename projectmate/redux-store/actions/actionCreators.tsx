import actionTypes from "./action-types";

export const RequestSetUser=()=>{
    return {
        type:actionTypes.REQUESTEDSETUSER,
    }
}

export const RequestSignUp=(email:String, password:String)=>{
    return {
        type:actionTypes.REQUESTEDSIGNUP,
        payload:{
            email,
            password,
        }
    }
}


export const RequestSignIn=(email:String, password:String)=>{
    return {
        type:actionTypes.REQUESTEDSIGNIN,
        payload:{
            email,
            password,
        }
    }
}

export const RequestSignOut=()=>{
    return {
        type:actionTypes.REQUESTEDSIGNOUT
    }
}


export const SetUser=(user:any)=>{
    return {
        type:actionTypes.SETUSER,
        payload:user
    }
}

export const SignUp=(user:any)=>{
    return {
        type:actionTypes.USERSIGNEDUP,
        payload:{
            user
        }
    }
}

export const SignIn=(user:any)=>{
    return {
        type:actionTypes.USERSIGNEDIN,
        payload:{
            user
        }
    }
}

export const Signout=()=>{
    return {
        type:actionTypes.USERSIGNEDOUT
    }
}