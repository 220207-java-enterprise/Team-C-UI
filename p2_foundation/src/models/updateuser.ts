export class UpdateUser {

    userId: string;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string; 
    isactive: Boolean;
    role: String;

    constructor(userId: string, firstname: string, lastname: string, email: string, username: string, password: string, isactive: Boolean,
        role: string) {
            
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isactive = isactive;
        this.role = role;

    }

}