import React, {useState} from "react";
import ISignInData from "../../Interfaces/ISignInData.interface";
import styles from "../MainLayout/Body.module.css";
import { handleSignInInputChange } from "../../../FormHandling/authFormHandling";
import { authFormProps } from "./Auth";
import { login } from "../../../Controllers/user.controller";

const SignInForm = ({ switchAuthForm }: authFormProps ): JSX.Element => {

    const [signInData, setSignInData] = useState<ISignInData>(
        {
            email:'',
            password: ''
        }
    )

    const clearForm: Function = (): void => {
        setSignInData({
            password: "",
            email: ""
        });
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        login(e, signInData);
    }

    return(
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div >
                <input
                    type="text"
                    className={styles.textInput}
                    id='email'
                    name='email'
                    placeholder='Email Address'
                    onChange={
                        (e:React.ChangeEvent<HTMLInputElement>) => handleSignInInputChange(e, signInData, setSignInData)
                    }
                    value={signInData.email}
                />
            </div>
            <div >
                <input
                    type="password"
                    className={styles.textInput}
                    id='password'
                    name='password'
                    placeholder='Password'
                    onChange={
                        (e:React.ChangeEvent<HTMLInputElement>) => handleSignInInputChange(e, signInData, setSignInData)
                    }
                    value={signInData.password}
                />
            </div>
            <div>
                <input
                    className={`${styles.formButton} ${styles.submitButton}`}
                    type="submit"
                    value='Sign In'
                />
            </div>
            <div>
                <input
                    className={`${styles.formButton}`}
                    type="button"
                    value='Cancel'
                    onClick={():void => clearForm()}
                />
            </div>
            <p>
                {'Don\'t have an account?\t'}
                <span
                    className={styles.changeForm}
                    onClick={() => switchAuthForm()}
                >
                        Sign Up
                    </span>
            </p>
        </form>
    );
}

export default SignInForm;

