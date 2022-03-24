import { Principal } from "../models/principal";
import { UpdateUser } from "../models/updateuser";
import { User } from "../models/user"
import { appClient } from "./app-client"

//register method
export const register = async (newUser : {username: string, email: string, password: string | number , firstname: string, lastname: string}) => {
    return await appClient.post<User>('/user', newUser, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // TODO implement axios call to POST /users
}


export const Update = async (UpdateUser : {username: string, email: string, password: string, firstname: string, lastname: string, userId: string, isactive: string, role:string  }) => {
    return await appClient.put<UpdateUser>('/user', UpdateUser, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // TODO implement axios call to PUT/PATCH /users
}

export const activateUser = (userId: string) => {
    // TODO implement axios call to PATCH /users, updating isActive
}

export const logout = (setCurrentUser: (nextUser: User | undefined) => void) => {
    setCurrentUser(undefined);
}