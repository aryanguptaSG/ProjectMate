import { NextPage } from "next";
import Head from "next/head";
import { STATE } from "../redux-store/reducers/authReducers";
import Router from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const Profile:NextPage=()=>{
    const state = useSelector((state:STATE)=>state);

    useEffect(()=>{
        if(!state.isauth){
            Router.push("/signin");
        }
    })
    return (
        <>
        <Head>
            <title>Project Mate - Profile</title>
        </Head>
        {state.isauth?
        <h1 style={{"display":"flex","minHeight":"100vh","alignItems":"center","justifyContent":"center"}}>Profile Page</h1>:
        <div>Loading ...</div>}
    </>);

}

export default Profile;