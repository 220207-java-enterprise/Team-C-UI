import axios from "axios";
import { Reimbursement } from "../models/reimbursement";
import { ReimbursementStatus } from "../models/reimbursementstatus";
import { ReimbursementType } from "../models/reimbursementtype";
import { UpdateUser } from "../models/updateuser";
import { appClient } from "./app-client";

export const getAllReimbursement = async () => {
    return await appClient.get<Reimbursement[]>('/reimbursement');
}

export const createReimbursement = async (newReimbursment : {id: string, amount: number, submitted: string, resolved: string, description: string, author_Id: string, 
    resolver_Id: string, status_Id: string, type_Id: string}) => {
    return await appClient.post<Reimbursement>('/reimbursement', newReimbursment, {
        headers: {
            
            'Content-Type': 'application/json',
        }
    });
    // TODO implement axios call to POST /users
}

//THis is for updating Reimbursements
export const makeReimbursement = async (updateReimbursement : {id: string, amount: number, submitted: string, resolved: string, description: string, author_Id: string, 
    resolver_Id: string, status_Id: string, type_Id: string}) => {
    return await appClient.put<Reimbursement>('/reimbursement', updateReimbursement, {
        headers: {
            
            'Content-Type': 'application/json',
            
        }        
        
    })
};