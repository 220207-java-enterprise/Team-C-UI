import { UpdateUser } from "./updateuser";
import { User as string } from "./user";

export class ReimbursementStatus {

    id: string;
    status: string;

    

    constructor(id: string, status: string)
        //category: {id: string, categoryName: string}
         {
        this.id = id;
        this.status = status;
    
    }

}