
import { UpdateUser } from "../models/updateuser";
import { User } from "../models/user"
import { UserRole } from "../models/userrole";
import { appClient } from "./app-client"
import { authenticate } from "./auth-service";


//register method
export const register = async (newUser : {username: string, email: string, password: string | number , firstname: string, lastname: string}) => {
    return await appClient.post<User>('/user', newUser, {
        headers: {
            
            'Content-Type': 'application/json',
        }
    });
    // TODO implement axios call to POST /users
}


<<<<<<< HEAD
export const findUserAndUpdate = async (updateUser : {userid: string, firstname: string, lastname: string, email: string, username: string,
    password: string, isactive: boolean, role: string}) => {
=======
export const findUserAndUpdate = async (updateUser : {userId: string, firstName: string, lastName: string, email: string, userName: string,
    password: string, isActive: Boolean, roleId: UserRole}) => {
>>>>>>> e00069864a168b5bd8acba05c403e2b2398d579f
    return await appClient.put<UpdateUser>('/user', updateUser, {
        headers: {
            'Content-Type': 'application/json',
            
        }        
        
    })
};

    // TODO implement axios call to PUT/PATCH /users


export const activateUser = (userId: string) => {
    // TODO implement axios call to PATCH /users, updating isActive
}

export const logout = (setCurrentUser: (nextUser: User | undefined) => void) => {
    setCurrentUser(undefined);
}