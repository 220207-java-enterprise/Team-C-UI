// NOT A COMPONENT
// Simply models what a "principal" object should look like
export class Principal {

    id: string;
    username: string;
    role: string;
    token: string;

    constructor(id: string, username: string, role: string, token: string) {
        this.id = id;
        this.username = username;
        this.role = role
        this.token = token;
    }

}