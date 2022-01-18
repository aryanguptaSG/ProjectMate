import { NextPage } from "next";
import styles from '../../styles/Home.module.css'

const Footer:NextPage=()=>{
    return (
        <div className={styles.footer}>
            <h4>This site is designed & developed by Mr. Aryan Gupta.</h4>
            <h5>&copy; Copyright 2022 ProjectMate. All Rights Reserved.</h5>
        </div>
    );
}

export default Footer;