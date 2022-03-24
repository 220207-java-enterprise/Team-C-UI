export class UpdateUser {

    //userId: string;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string; 
    isactive: string;
    role: String;

    constructor(firstname: string, lastname: string, email: string, username: string, password: string, isactive: string,
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