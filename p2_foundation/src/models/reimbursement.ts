import { UpdateUser } from "./updateuser";
import { User as string } from "./user";

export class Reimbursement {

    id: string;
    amount:  number;
    submitted: string;
    resolved: string;
    description: string;
    paymentId: string;
    authorId: string;
    resolverId: string;
    statusId: string;
    typeId: string;

    

    constructor(id: string, amount: number, submitted: string, resolved: string, description: string, paymentId: string, authorId: string, 
        resolverId: string, statusId: string, typeId: string
        //category: {id: string, categoryName: string}
        ) {
        this.id = id;
        this.amount = amount;
        this.submitted = submitted;
        this.resolved = resolved;
        this.description = description;
        this.paymentId = paymentId;
        this.authorId = authorId;
        this.resolverId = resolverId;
        this.statusId = statusId;
        this.typeId = typeId;
        //this.category = category.categoryName;
    }

}