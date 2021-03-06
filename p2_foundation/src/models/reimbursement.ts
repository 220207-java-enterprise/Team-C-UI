import { User as string } from "./user";

export class Reimbursement {

    id: string;
    amount: string;
    submitted: string;
    resolved: Boolean;
    description: string;
    paymentId: string;
    authorId: string;
    resolverId: string;
    statusId: string;
    typeId: string;

    

    constructor(id: string, amount: string, submitted: string, resolved: Boolean, description: string, paymentId: string, authorId: string, 
        resolverId: string, statusId: string, typeId: {id: string, typeName: string} 
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
        this.typeId = typeId.typeName;
        //this.category = category.categoryName;
    }

}