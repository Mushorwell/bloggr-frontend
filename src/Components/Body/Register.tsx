import React, {FunctionComponent, useEffect, useState} from 'react';
import styles from "./Body.module.css";
import {MdSearch} from "react-icons/md";
import Cards from "./Cards";
import {findAllByDisplayValue} from "@testing-library/react";

const Register = () => {
    const [isRegistered, setIsRegistered] = useState(true);

    const signInTab = document.getElementById('signInTab');
    const signUpTab = document.getElementById('signUpTab');

    const goToRegister= () => {
        setIsRegistered(false);
    }

    const goToLogin = () =>{
        setIsRegistered(true);
    }

    const login = () => {
    //    fetch method for login
    }

    const register = () => {
    //    fetch method for register
    }

    const SignInForm = () => {
        return(
            <div className={styles.form}>
                <div ><input type="text" className={styles.textInput} id='username' name='username' placeholder='User name'/></div>
                <div ><input type="password" className={styles.textInput} id='password' name='password' placeholder='Password'/></div>
                <div><input className={`${styles.formButton} ${styles.submitButton}`} type="submit" value='Sign In' onClick={() => login()}/></div>
                <div><input className={`${styles.formButton}`} type="button" value='Cancel'/></div>
                <p>Don't have an account? <span className={styles.changeForm} onClick={() => goToRegister()}>Sign Up</span></p>
            </div>
        );
    }

    const SignUpForm = () => {
        return(
            <div className={styles.form}>
                <div ><input type="text" className={styles.textInput} id='username' name='username' placeholder='User name'/></div>
                <div ><input type="text" className={styles.textInput} id='email' name='email' placeholder='Email'/></div>
                <div ><input type="password" className={styles.textInput} id='password' name='password' placeholder='Password'/></div>
                <div ><input type="password" className={styles.textInput} id='confirmPassword' name='confirmPassword' placeholder='Confirm Password'/></div>
                <div><input className={`${styles.formButton} ${styles.submitButton}`} type="submit" value='Sign Up' onClick={() => login()}/></div>
                <div><input className={`${styles.formButton}`} type="button" value='Cancel'/></div>
                <p>Already have an account? <span className={styles.changeForm} onClick={() => goToLogin()}>Sign In</span></p>
            </div>
        );
    }

    return(
        <div className={styles.register}>
            <div className={styles.loginSignIntabs}>
                <div className={ isRegistered ? `${styles.tab} ${styles.tabSelected}` : styles.tab } onClick={()=>goToLogin()} id='signInTab'><h3>Sign In</h3></div>
                <div className={ isRegistered ? styles.tab : `${styles.tab} ${styles.tabSelected}`} onClick={()=>goToRegister()} id='signUpTab'><h3>Sign Up</h3></div>
            </div>
            {isRegistered? <SignInForm /> : <SignUpForm /> }
        </div>
    );
}

export default Register;