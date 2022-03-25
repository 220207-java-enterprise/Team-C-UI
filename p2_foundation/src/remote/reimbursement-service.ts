import axios from "axios";
import { Reimbursement } from "../models/reimbursement";
import { appClient } from "./app-client";

export const getAllReimbursement = async () => {
    return await appClient.get<Reimbursement[]>('/reimbursement');
}

export const createReimbursement = async (newReimbursment : {id: string, amount: string, submitted: string, resolved: string, description: string, paymentId: string, authorId: string, 
    resolverId: string, statusId: string, typeId: string}) => {
    return await appClient.post<Reimbursement>('/reimbursement', newReimbursment, {
        headers: {
            
            'Content-Type': 'application/json',
        }
    });
    // TODO implement axios call to POST /users
}

//THis is for updating Reimbursements
export const makeReimbursement = async (updateReimbursement : {id: string, amount: string, submitted: string, resolved: string, description: string, paymentId: string, authorId: string, 
    resolverId: string, statusId: string, typeId: string}) => {
    return await appClient.put<Reimbursement>('/reimbursement', updateReimbursement, {
        headers: {
            
            'Content-Type': 'application/json',
            
        }        
        
    })
};