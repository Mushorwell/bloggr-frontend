import styles from "../MainLayout/Body.module.css";
import React, {useState} from "react";
import { authFormProps } from "./Auth";
import ISignUpData from "../../Interfaces/ISignUpData.interface";
import {register} from "../../../Controllers/user.controller";
import {handleSignUpInputChange} from "../../../FormHandling/authFormHandling";

const SignUpForm = ({ switchAuthForm }: authFormProps): JSX.Element => {

    const [signUpData, setSignUpData]: [ISignUpData, ((value: (((prevState: ISignUpData) => ISignUpData) | ISignUpData)) => void)] = useState<ISignUpData>(
        {
            email: "",
            password: "",
            passwordConfirmation:"",
            name: ""
        }
    )

    const clearForm: Function = (): void => {
        setSignUpData({
            email: "",
            password: "",
            passwordConfirmation: "",
            name: ""
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
        register(e, signUpData);
    }

    return(
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div>
                <input
                    type="text"
                    className={styles.textInput}
                    id='name'
                    name='name'
                    placeholder='User name'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleSignUpInputChange(e, signUpData, setSignUpData)}
                    value={signUpData.name}
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
                    id='passwordConfirmation'
                    name='passwordConfirmation'
                    placeholder='Confirm Password'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleSignUpInputChange(e, signUpData, setSignUpData)}
                    value={signUpData.passwordConfirmation}
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