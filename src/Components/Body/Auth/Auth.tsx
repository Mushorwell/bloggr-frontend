import React, {useState} from 'react';
import styles from "../MainLayout/Body.module.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export type authFormProps = {
    switchAuthForm: Function
}

const Auth = (): JSX.Element => {

    const [isRegistered, setIsRegistered] = useState<boolean>(true);

    const goToLogin: Function = (): void =>{
        setIsRegistered(true);
    }

    const goToRegister: Function = (): void => {
        setIsRegistered(false);
    }

    return(
        <div className={styles.register}>
            <div className={styles.loginSignInTabs}>
                <div
                    className={ isRegistered ? `${styles.tab} ${styles.tabSelected}` : styles.tab }
                    onClick={()=>goToLogin()}
                    id='signInTab'
                >
                    <h3>Sign In</h3>
                </div>
                <div
                    className={ isRegistered ? styles.tab : `${styles.tab} ${styles.tabSelected}`}
                    onClick={()=>goToRegister()}
                    id='signUpTab'
                >
                    <h3>Sign Up</h3>
                </div>
            </div>
            {
                isRegistered?
                <SignInForm
                    switchAuthForm={goToRegister}
                /> :
                <SignUpForm
                    switchAuthForm={goToLogin}
                />
            }
        </div>
    );
}

export default Auth;