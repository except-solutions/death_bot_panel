import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface UserFieldValues extends FieldValues {
    email: string;
    password: string;
}

export interface IPropsLogin<
    TFieldValues extends UserFieldValues = UserFieldValues,
    TContext = any,
    > {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
}

export interface IPropsRegister <
    TFieldValues extends UserFieldValues = UserFieldValues,
    TContext = any,
    > {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
}

export interface IAuthState {
    user: IPublicUser
    isLogged: boolean
}

interface IPublicUser {
    id: number | null,
    firstname: string,
    username: string, 
    email: string,
    createdAt: string,
    updatedAt: string, 
    watchList: [IWatchList]
}

interface IWatchList {
    id: number | null,
    name: string,
    assetId: string, 
    createdAt: string,
    updatedAt: string, 
    user: number | null
}

export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    email: string
    password: string
    firstName: string
    userName: string
}