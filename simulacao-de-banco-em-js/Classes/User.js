import { Account } from "./Account.js"

export class User {
    constructor(fullName, email) {
        this.fullName = fullName
        this.email = email
        this.account = new Account(this) // Cria a conta usando está mesma instancia 
    }
}