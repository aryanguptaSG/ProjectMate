import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/navbar.module.css";
import Link from "next/link";
import { FaSignInAlt, FaHome } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { STATE } from "../../redux-store/reducers/authReducers"
import * as actions from "../../redux-store/actions/actionCreators";
import { onAuthStateChanged } from "firebase/auth";
import * as firebase from "../../firebase/firebaseConfig";

interface Prop {
    showmobilenav: boolean
    setshowmobilenav: Function
}

const NavUnAuth = (props: Prop) => {
    const route = useRouter();
    console.log("Un Auth A gya hai");
    return (
        <ul>
            <li className={route.asPath == "/" ? styles.activenavlink : ""} onClick={() => {
                props.setshowmobilenav(!props.showmobilenav)
            }}>
                <Link href="/">
                    <a>Home <span><FaHome /></span> </a>
                </Link>
            </li>
            <li className={route.asPath == "/signin" ? styles.activenavlink : ""} onClick={() => {
                props.setshowmobilenav(!props.showmobilenav)
            }}>
                <Link href="/signin">
                    <a>SignIn <span><FaSignInAlt /></span></a>
                </Link>
            </li>
            <li className={route.asPath == "/signup" ? styles.activenavlink : ""} onClick={() => {
                props.setshowmobilenav(!props.showmobilenav)
            }}>
                <Link href="/signup">
                    <a>SignUp <span><MdAppRegistration /></span> </a>
                </Link>
            </li>
        </ul>

    );

}

const NavAuth = (props: Prop) => {
    const route = useRouter();
    const dispatch = useDispatch();

    return (
        <ul>
            <li className={route.asPath == "/" ? styles.activenavlink : ""} onClick={() => {
                props.setshowmobilenav(!props.showmobilenav)
            }}>
                <Link href="/">
                    <a>Home <span><FaHome /></span> </a>
                </Link>
            </li>
            <li className={route.asPath == "/profile" ? styles.activenavlink : ""} onClick={() => {
                props.setshowmobilenav(!props.showmobilenav)
            }}>
                <Link href="/profile">
                    <a>Profile <span><FaSignInAlt /></span></a>
                </Link>
            </li>
            <li onClick={() => {
                dispatch(actions.RequestSignOut())
                props.setshowmobilenav(!props.showmobilenav)
            }}>
                <Link href="/">
                    <a>SignOut <span><MdAppRegistration /></span> </a>
                </Link>
            </li>
        </ul>
    );

}





const Navbar: NextPage = () => {
    const getstate = (state: STATE) => state
    const state = useSelector(getstate);
    const [showmobilenav, setshowmobilenav] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(firebase.auth, (curruser) => {
            if (curruser) {
                dispatch(actions.SetUser(curruser));
            }
            else {
                dispatch(actions.Signout());
            }
        })
    }, [dispatch])

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logodiv}>
                    <Link href="/"><a onClick={() => {
                        if (showmobilenav)
                            setshowmobilenav(!showmobilenav)
                    }} ><Image src="/ProjectMate.svg" width={200} height={50} /></a></Link>
                </div>
                <div className={showmobilenav ? `${styles.navlinks} ${styles.mobilenavlink}` : styles.navlinks}>
                    {
                        state.isauth !== undefined &&
                        <>
                            {state.isauth ? <NavAuth showmobilenav={showmobilenav} setshowmobilenav={setshowmobilenav} /> : <NavUnAuth showmobilenav={showmobilenav} setshowmobilenav={setshowmobilenav} />}
                        </>
                    }
                </div>

                <div className={styles.hamburger}><GiHamburgerMenu onClick={() => {
                    setshowmobilenav(!showmobilenav)
                }} /></div>
            </div>
        </>
    );
}

export default Navbar;