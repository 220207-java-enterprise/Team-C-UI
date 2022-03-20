import { Reimbursement } from "../models/reimbursement";
import { appClient } from "./app-client";

export const getAllReimbursement = async () => {
    return await appClient.get<Reimbursement[]>('/reimbursement');
}
