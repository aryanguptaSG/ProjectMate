import actionTypes from "../actions/action-types";

function getauth(){
    if(typeof window !== "undefined") {
        if(localStorage.getItem("isauth")=="true" && localStorage.getItem("user")!=="null"){
            return {
                isauth:true,
                user:JSON.parse(localStorage.getItem("user") as string)
            }
        }
        return {
            isauth:false,
            user:null
        }
    }    
    return {
        isauth:undefined,
        user:null
    }
}

let  initialstate:STATE = getauth();



export interface STATE{
    isauth:any
    user:any
}

export interface setuser{
    type:actionTypes.SETUSER,
    payload:{}
}

export interface signout{
    type:actionTypes.USERSIGNEDOUT
}

type Action = setuser | signout

const authReducers = (state:STATE = initialstate , action:Action)=>{
    switch(action.type){
        case actionTypes.SETUSER:
            localStorage.setItem("isauth","true");
            localStorage.setItem("user",JSON.stringify(action.payload))
        return {...state , isauth:true , user:action.payload}
        
        case actionTypes.USERSIGNEDOUT:{            
            localStorage.setItem("isauth","false");
            localStorage.setItem("user","null");
            return {...state , isauth:false ,user:null}
        }
        default:
            return state
    }
}


export default authReducers;