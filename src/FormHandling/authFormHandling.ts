import React from "react";
import ISignUpData from "../Components/Interfaces/ISignUpData.interface";
import ISignInData from "../Components/Interfaces/ISignInData.interface";

export const handleSignInInputChange = (
    event:  React.ChangeEvent<HTMLInputElement> ,
    authFormData: ISignInData,
    setAuthFormData: React.Dispatch<React.SetStateAction<ISignInData>>
) => {
    setAuthFormData({
        ...authFormData,
        [event.target.name]: event.target.value
    });
}

export const handleSignUpInputChange = (
    event:  React.ChangeEvent<HTMLInputElement> ,
    authFormData: ISignUpData,
    setAuthFormData: React.Dispatch<React.SetStateAction<ISignUpData>>
) => {
    setAuthFormData({
        ...authFormData,
        [event.target.name]: event.target.value
    });
}