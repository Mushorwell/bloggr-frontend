import ISignInData from "../Components/Interfaces/ISignInData.interface";
import ISignUpData from "../Components/Interfaces/ISignUpData.interface";
import React from "react";

type requestBody = {
    body: ISignUpData | ISignInData
}

export async function login (
    event: React.FormEvent<HTMLFormElement>,
    signInData: ISignInData
): Promise<void>  {
    event.preventDefault();

    let parameters: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInData)
    }

    //    fetch method for login
    const response = await fetch('http://localhost:5000/api/sessions', parameters);
    console.log(response.json());
    // alert(`${signInData.email} has logged in.`);
}

// export async function register (
//     event: React.FormEvent<HTMLFormElement>,
//     signUpData: ISignUpData
// ): Promise<void> {
//     //    fetch method for register
//     event.preventDefault();
//     // console.log(signUpData);
//     let parameters: RequestInit = {
//         method: 'GET',
//         mode: 'no-cors',
//         headers: {
//             'Accept': '*/*',
//             'Content-Type': 'application/json'
//         },
//         // body: signUpData
//     }
//
//     // console.log(signUpData);
//     const response = await fetch('http://localhost:5000/test', parameters);
//     console.log(response);
//     // alert(`A new user has registered`);
// }

export async function register (
    event: React.FormEvent<HTMLFormElement>,
    signUpData: ISignUpData
): Promise<void> {
    //    fetch method for register
    event.preventDefault();
    // console.log(signUpData);
    let parameters: RequestInit = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        // body: signUpData
    }

    // console.log(signUpData);
    const response = await fetch('http://localhost:5000/api/users');
    console.log(response);
    // alert(`A new user has registered`);
}
