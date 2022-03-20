import { Principal } from "../models/principal";
import { appClient } from "./app-client";

                //All async functions returns promise implicitly
export const authenticate = async (credentials: {username: string, password: string | number}) => {
    return await appClient.post<Principal>('/auth', credentials, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
{/*setCurrentUser is a function that takes in nextUser principal or undefined and returns nothing*/}
export const logout = (setCurrentUser: (nextUser: Principal | undefined) => void) => {
    setCurrentUser(undefined);
}
