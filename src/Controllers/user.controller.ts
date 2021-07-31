import ISignInData from "../Components/Interfaces/ISignInData.interface";
import ISignUpData from "../Components/Interfaces/ISignUpData.interface";
import React from "react";

export const login = (
    event: React.FormEvent<HTMLFormElement>,
    signInData: ISignInData
): void => {
    //    fetch method for login
    event.preventDefault();
    console.log(`${signInData.email} has logged in.`);
    alert(`${signInData.email} has logged in.`);
}

export const register = (
    event: React.FormEvent<HTMLFormElement>,
    signUpData: ISignUpData
) => {
    //    fetch method for register
    event.preventDefault();
    console.log(`A new user has registered`, signUpData);
    alert(`A new user has registered`);
}
