
import { Principal } from "../models/principal";
import { UpdateUser } from "../models/updateuser";
import { User } from "../models/user"
import { appClient } from "./app-client"

const API_URL = "http://localhost:8080/p2_foundation/user";
//register method
export const register = async (newUser : {username: string, email: string, password: string | number , firstname: string, lastname: string}) => {
    return await appClient.post<User>('/user', newUser, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // TODO implement axios call to POST /users
}


export const Update = async (updateUser : {userid: string, firstname: string, lastname: string, email: string, username: string,
    password: string, isactive: boolean, role: string}) => {
    return await appClient.put<UpdateUser>('/user', updateUser, {
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