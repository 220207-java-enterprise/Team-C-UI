export class UpdateUser {

    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string; 
    isactive: boolean;
    role: String;

    constructor(firstname: string, lastname: string, email: string, username: string, password: string, isactive: boolean,
        role: string) {
  
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isactive = isactive;
        this.role = role;

    }

}