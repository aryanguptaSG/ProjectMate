import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/navbar.module.css";
import Link from "next/link";
import { FaSignInAlt, FaHome } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar: NextPage = () => {
    const [showmobilenav, setshowmobilenav] = useState(false);

    return (
        <div className={styles.navbar}>
            <div className={styles.logodiv}>
                <Link href="/"><a><Image src="/ProjectMate.svg" width={200} height={50} /></a></Link>
            </div>
            <div className={showmobilenav ? `${styles.navlinks} ${styles.mobilenavlink}`: styles.navlinks}>
                <ul>
                    <li onClick={() => {
                setshowmobilenav(!showmobilenav)
            }}>
                        <Link href="/home">
                            <a>Home <span><FaHome /></span> </a>
                        </Link>
                    </li>
                    <li onClick={() => {
                setshowmobilenav(!showmobilenav)
            }}>
                        <Link href="/signin">
                            <a>SignIn <span><FaSignInAlt /></span></a>
                        </Link>
                    </li>
                    <li onClick={() => {
                setshowmobilenav(!showmobilenav)
            }}>
                        <Link  href="/signup">
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