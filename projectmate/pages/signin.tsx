import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEvent , useState} from "react";
import styles from "../styles/signin.module.css";
import { useDispatch , useSelector} from "react-redux";
import * as actions from "../redux-store/actions/actionCreators";
import Link from "next/link";
import { STATE } from "../redux-store/reducers/authReducers";
import Router from "next/router";
import { useEffect } from "react";

/* All imports above it */



/* This is SignIn Form */
const SignIn:NextPage=()=>{
    const dispatch = useDispatch();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

      /* Getting the state of our redux store */
    const state = useSelector((state:STATE)=>state);

    useEffect(()=>{
        if(state.isauth){
            Router.push("/");
        }
    })
    
    /* Handling the form submit */
    const handleSignIn = (e:FormEvent)=>{
        e.preventDefault();
        if(email){
            if(password){
                 /* Dispatching the request sign in action */
                dispatch(actions.RequestSignIn(email,password))
                setemail("");
                setpassword("");
            }
            else{alert("Please Fill Password Field.");return ;}
        }
        else{alert("Please Fill Email Field.");return ;}
    }
    
    return (
        <>
        <Head>
            <title>Sign In - ProjectMate</title>
        </Head>
        {state.isauth!==undefined && !state.isauth?
        <div className={styles.signin}>
            <div className={styles.form}>
                <form onSubmit={(e)=>{handleSignIn(e)}}>
                <h4>Welcome Back !</h4>
                <div className={styles.label}>Email</div>
                    <input  onChange={(e)=>{
                        setemail(e.target.value);
                    }} value={email} type="email" placeholder="Enter Email"/>
                    <div className={styles.forgetPassword}>
                        <div>Password</div>
                        <span>Forget Password?</span>
                    </div>
                    <input onChange={(e)=>{
                        setpassword(e.target.value);
                    }} value={password}  type="password" placeholder="Enter Password"/>
                    <button>Sign In</button>
                    <div>
                        Already Have an Account?
                        <Link href="/signup"><a> Sign Up</a></Link>
                    </div>
                </form>
            </div>
            <div className={styles.graphic}>
                <Image src="/images/signin.jpg" width={600} height={600}/>
            </div>
        </div>:
        <div style={{"display":"flex","minHeight":"100vh","alignItems":"center","justifyContent":"center"}}>
            Loading ...
        </div>}
        </>
    );
}

export default SignIn;