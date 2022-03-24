export class User {

    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string; 

    constructor(firstname: string, lastname: string, email: string, username: string, password: string) {
  
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;

    }

}