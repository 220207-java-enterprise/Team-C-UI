import { UpdateUser } from "./updateuser";
import { User as string } from "./user";

export class ReimbursementType {

    id: string;
    type: string;

    

    constructor(id: string, type: string)
        //category: {id: string, categoryName: string}
         {
        this.id = id;
        this.type = type;
    
    }

}