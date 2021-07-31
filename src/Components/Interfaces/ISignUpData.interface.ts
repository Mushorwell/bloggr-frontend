import ISignInData from "./ISignInData.interface";

export default interface ISignUpData extends ISignInData{
    username: string
    confirmPassword: string
}