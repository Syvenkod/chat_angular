export class User {
    readonly id:number;
    readonly name: string;
    readonly avatar: string;
    readonly email: string;
    readonly password: any;
    constructor(id:number, name: string, email: string, password: any){
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    }
    }