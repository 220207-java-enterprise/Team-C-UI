export class User {

    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string; 
    isActive:string;
    role: {id: string, roleName: string}

    constructor(id: string, firstName: string, lastName: string, email: string, username: string, password: string, isActive: string, role: {id: string, roleName: string}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isActive = isActive;
        this.role = role;
    }

}