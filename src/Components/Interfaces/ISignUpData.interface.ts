import ISignInData from "./ISignInData.interface";

export default interface ISignUpData extends ISignInData{
    name: string
    passwordConfirmation: string
}