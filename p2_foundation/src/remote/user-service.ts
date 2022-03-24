import { User } from "../models/user"
import { appClient } from "./app-client"
//register method
export const register = async (newUser : {username: string, email: string, password: string, firstname: string, lastname: string}) => {
    return await appClient.post<User>('/user', newUser, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // TODO implement axios call to POST /users
}

export const updateUser = () => {
    // TODO implement axios call to PUT/PATCH /users
}

export const activateUser = (userId: string) => {
    // TODO implement axios call to PATCH /users, updating isActive
}
