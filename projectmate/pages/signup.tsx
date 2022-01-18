import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEvent , useState} from "react";
import styles from "../styles/signup.module.css";

const SignUP:NextPage=()=>{
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const handleSignUp = (e:FormEvent)=>{
        e.preventDefault();
        if(email){
            if(password){
                if(confirmpassword){
                    if(confirmpassword==password){
                        const userdata = {
                            "Email":email,
                            "password":password
                        }
                        console.log(userdata);
                        alert("Form Submitted Successfully .");
                        setemail("");
                        setpassword("");
                        setconfirmpassword("");
                    }
                    else{alert("Please Dosen't Match");return ;}
                }
                else{alert("Please Confirm Password.");return ;}
            }
            else{alert("Please Fill Password Field.");return ;}
        }
        else{alert("Please Fill Email Field.");return ;}
    }
    return (
        <>
        <Head>
            <title>Sign Up - ProjectMate</title>
        </Head>
        <div className={styles.signup}>
            <div className={styles.graphic}>
                <Image src="/images/register.jpg" width={600} height={600}/>
            </div>
            <div className={styles.form}>
                <form onSubmit={(e)=>{handleSignUp(e)}}>
                    <input onChange={(e)=>{
                        setemail(e.target.value);
                    }} value={email} type="email" placeholder="Enter Email"/>
                    <input onChange={(e)=>{
                        setpassword(e.target.value);
                    }} value={password} type="password" placeholder="Enter Password"/>
                    <input onChange={(e)=>{
                        setconfirmpassword(e.target.value);
                    }} value={confirmpassword} type="password" placeholder="Confirm Password"/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default SignUP;