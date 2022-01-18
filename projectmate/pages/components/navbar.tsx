import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/navbar.module.css";
import Link from "next/link";
import { FaSignInAlt, FaHome } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar: NextPage = () => {
    const [showmobilenav, setshowmobilenav] = useState(false);
    const route = useRouter();
    console.log(route.pathname, route.query, route.asPath);

    return (
        <div className={styles.navbar}>
            <div className={styles.logodiv}>
                <Link href="/"><a onClick={() => {
                    if(showmobilenav)
                    setshowmobilenav(!showmobilenav)
                }} ><Image src="/ProjectMate.svg" width={200} height={50} /></a></Link>
            </div>
            <div className={showmobilenav ? `${styles.navlinks} ${styles.mobilenavlink}` : styles.navlinks}>
                <ul>
                    <li className={route.asPath == "/" ? styles.activenavlink : ""} onClick={() => {
                        setshowmobilenav(!showmobilenav)
                    }}>
                        <Link href="/">
                            <a>Home <span><FaHome /></span> </a>
                        </Link>
                    </li>
                    <li className={route.asPath == "/signin" ? styles.activenavlink : ""} onClick={() => {
                        setshowmobilenav(!showmobilenav)
                    }}>
                        <Link href="/signin">
                            <a>SignIn <span><FaSignInAlt /></span></a>
                        </Link>
                    </li>
                    <li className={route.asPath == "/signup" ? styles.activenavlink : ""} onClick={() => {
                        setshowmobilenav(!showmobilenav)
                    }}>
                        <Link href="/signup">
                            <a>SignUp <span><MdAppRegistration /></span> </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.hamburger}><GiHamburgerMenu onClick={() => {
                setshowmobilenav(!showmobilenav)
            }} /></div>
        </div>
    );
}

export default Navbar;