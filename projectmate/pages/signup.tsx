import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEvent, useState } from "react";
import styles from "../styles/signup.module.css";
import { useDispatch , useSelector} from "react-redux";
import * as actions from "../redux-store/actions/actionCreators";
import Link from "next/link";
import { STATE } from "../redux-store/reducers/authReducers";
import Router from "next/router";
import { useEffect } from "react";


/* All imports above it */



/* This is Sign Up Page */
const SignUP: NextPage = () => {
    /* Getting the state of our redux store */
    const state = useSelector((state:STATE)=>state);

    useEffect(()=>{
        if(state.isauth){
            Router.push("/");
        }
    })
    const dispatch = useDispatch();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    /* Handling the form submit */
    const handleSignUp = (e: FormEvent) => {
        e.preventDefault();
        if (email) {
            if (password) {
                if (confirmpassword) {
                    if (confirmpassword == password) {
                         /* Dispatching the request sign up action */
                        dispatch(actions.RequestSignUp(email, password))
                        setemail("");
                        setpassword("");
                        setconfirmpassword("");
                    }
                    else { alert("Please Dosen't Match"); return; }
                }
                else { alert("Please Confirm Password."); return; }
            }
            else { alert("Please Fill Password Field."); return; }
        }
        else { alert("Please Fill Email Field."); return; }
    }
    return (
        <>
            <Head>
                <title>Sign Up - ProjectMate</title>
            </Head>
            {state.isauth!==undefined && !state.isauth?
            <div className={styles.signup}>
                <div className={styles.graphic}>
                    <Image src="/images/register.jpg" width={600} height={600} />
                </div>
                <div className={styles.form}>
                    <form onSubmit={(e) => { handleSignUp(e) }}>
                        <div className={styles.label}>Email</div>
                        <input onChange={(e) => {
                            setemail(e.target.value);
                        }} value={email} type="email" placeholder="Enter Email" />
                        <div className={styles.label}>Password</div>
                        <input onChange={(e) => {
                            setpassword(e.target.value);
                        }} value={password} type="password" placeholder="Enter Password" />
                        <div className={styles.label}>Confirm Password</div>
                        <input onChange={(e) => {
                            setconfirmpassword(e.target.value);
                        }} value={confirmpassword} type="password" placeholder="Confirm Password" />
                        <button>Sign Up</button>
                        <div>
                            Already Have an Account?
                            <Link href="/signin"><a> Sign IN</a></Link>
                        </div>
                    </form>
                </div>
            </div>:
            <div style={{"display":"flex","minHeight":"100vh","alignItems":"center","justifyContent":"center"}}>
            Loading ...
        </div>}
        </>
    );
}

export default SignUP;