
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


export const findUserAndUpdate = async (updateUser : {userId: string, firstName: string, lastName: string, email: string, userName: string,
    password: string, isActive: boolean, roleId: UserRole}) => {
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