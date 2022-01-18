import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEvent , useState} from "react";
import styles from "../styles/signin.module.css";

const SignIn:NextPage=()=>{
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const handleSignIn = (e:FormEvent)=>{
        e.preventDefault();
        if(email){
            if(password){
                const userdata = {
                    "Email":email,
                    "password":password
                }
                console.log(userdata);
                alert("Form Submitted Successfully .");
                setemail("");
                setpassword("");
            }
            else{alert("Please Fill Password Field.");return ;}
        }
        else{alert("Please Fill Eamil Field.");return ;}
    }
    return (
        <>
        <Head>
            <title>Sign In - ProjectMate</title>
        </Head>
        <div className={styles.signin}>
            <div className={styles.form}>
                <form onSubmit={(e)=>{handleSignIn(e)}}>
                    <input  onChange={(e)=>{
                        setemail(e.target.value);
                    }} value={email} type="email" placeholder="Enter Email"/>
                    <input onChange={(e)=>{
                        setpassword(e.target.value);
                    }} value={password}  type="password" placeholder="Enter Password"/>
                    <button>Sign In</button>
                </form>
            </div>
            <div className={styles.graphic}>
                <Image src="/images/signin.jpg" width={600} height={600}/>
            </div>
        </div>
        </>
    );
}

export default SignIn;