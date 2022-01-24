import { call } from "redux-saga/effects";
import actionTypes from "../actions/action-types";
import {signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import * as firebase from "../../firebase/firebaseConfig";
import Router from "next/router";


export interface signup{
    type:actionTypes.REQUESTEDSIGNUP,
    payload:{
        email:string
        password:string
    }
}

export interface signin{
    type:actionTypes.REQUESTEDSIGNIN,
     payload:{
        email:string
        password:string
    }
}

export interface signout{
    type:actionTypes.REQUESTEDSIGNOUT
}



export function* signUp(action:signup){
    try{
        const data:{} = yield call(()=>createUserWithEmailAndPassword(firebase.auth,action.payload.email,action.payload.password));
        Router.push("/");
        alert("SuccessFully Registered");
    }
    catch(error){
        alert(error)
        console.log(error , "this is the error !!!!!");
    }
}

export function* signIN(action:signin){
    try{
        const data:{} = yield call(()=>signInWithEmailAndPassword(firebase.auth,action.payload.email,action.payload.password));
        Router.push("/");
        alert("SuccessFul Sign IN");
    }
    catch(error){
        alert(error)
        console.log(error , "this is the error !!!!!");
    }
}

export function* signout(action:signout){
    alert("You Have Signed Out!");
    signOut(firebase.auth);
}