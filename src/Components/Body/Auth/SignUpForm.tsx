import styles from "../MainLayout/Body.module.css";
import React, {useState} from "react";
import { authFormProps } from "./Auth";
import ISignUpData from "../../Interfaces/ISignUpData.interface";
import {register} from "../../../Controllers/user.controller";
import {handleSignUpInputChange} from "../../../FormHandling/authFormHandling";

const SignUpForm = ({ switchAuthForm }: authFormProps): JSX.Element => {

    const [signUpData, setSignUpData]: [ISignUpData, ((value: (((prevState: ISignUpData) => ISignUpData) | ISignUpData)) => void)] = useState<ISignUpData>(
        {
            confirmPassword: "",
            email: "",
            password: "",
            username: ""
        }
    )

    const clearForm: Function = (): void => {
        setSignUpData({
            confirmPassword: "",
            email: "",
            password: "",
            username: ""
        });
    }

    return(
        <form
            className={styles.form}
            onSubmit={(e:React.FormEvent<HTMLFormElement>) => register(e, signUpData)}
        >
            <div>
                <input
                    type="text"
                    className={styles.textInput}
                    id='username'
                    name='username'
                    placeholder='User name'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSignUpInputChange(e, signUpData, setSignUpData)}
                    value={signUpData.username}
                />
            </div>
            <div>
                <input
                    type="text"
                    className={styles.textInput}
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleSignUpInputChange(e, signUpData, setSignUpData)}
                    value={signUpData.email}
                />
            </div>
            <div>
                <input
                    type="password"
                    className={styles.textInput}
                    id='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleSignUpInputChange(e, signUpData, setSignUpData)}
                    value={signUpData.password}
                />
            </div>
            <div>
                <input
                    type="password"
                    className={styles.textInput}
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleSignUpInputChange(e, signUpData, setSignUpData)}
                    value={signUpData.confirmPassword}
                />
            </div>
            <div>
                <input
                    className={`${styles.formButton} ${styles.submitButton}`}
                    type="submit"
                    value='Sign Up'
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
                {'Already have an account?\t'}
                <span
                    className={styles.changeForm}
                    onClick={() => switchAuthForm()}
                >
                        Sign In
                    </span>
            </p>
        </form>
    );
}

export default SignUpForm;