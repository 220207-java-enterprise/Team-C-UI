<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5fe9e39d0aeeba1440b92b143d831e9f9ea5cd38
import { Principal } from "../models/principal";
import { UpdateUser } from "../models/updateuser";
import { User } from "../models/user"
import { appClient } from "./app-client"
//register method
export const register = async (newUser : {username: string, email: string, password: string | number , firstname: string, lastname: string}) => {
<<<<<<< HEAD
=======
=======
import { User } from "../models/user"
import { appClient } from "./app-client"
//register method
export const register = async (newUser : {username: string, email: string, password: string, firstname: string, lastname: string}) => {
>>>>>>> 1ab6a0ea0320c55cfbee70bd164d0b0a3adfede0
>>>>>>> 5fe9e39d0aeeba1440b92b143d831e9f9ea5cd38
    return await appClient.post<User>('/user', newUser, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // TODO implement axios call to POST /users
}


export const findUserAndUpdate = async (userId: string) => {
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