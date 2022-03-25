import { ReimbursementStatus } from "./reimbursementstatus";
import { ReimbursementType } from "./reimbursementtype";
import { UpdateUser } from "./updateuser";
import { User as string } from "./user";

export class Reimbursement {

    id: string;
    amount:  number;
    submitted: string;
    resolved: string;
    description: string;
    author_Id: string;
    resolver_Id: string;
    status_Id: string;
    type_Id: string;

    

    constructor(id: string, amount: number, submitted: string, resolved: string, description: string, author_Id: string, 
        resolver_Id: string, status_Id: string, type_Id: string
        //category: {id: string, categoryName: string}
        ) {
        this.id = id;
        this.amount = amount;
        this.submitted = submitted;
        this.resolved = resolved;
        this.description = description;
        this.author_Id = author_Id;
        this.resolver_Id = resolver_Id;
        this.status_Id = status_Id;
        this.type_Id = type_Id;
        //this.category = category.categoryName;
    }

}