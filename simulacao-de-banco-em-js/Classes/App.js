import { Deposit } from "./Deposit.js"
import { Loan } from "./Loan.js"
import { Transfer } from "./Transfer.js"
import { User } from "./User.js"

export class App {
    static #_users = []

    static findUserByEmail(email) {
        const user = App.#_users.find(user => user.email === email) // Verifica se já existe algum usuario com o email cadastrado iterando pelos usuarios e verificando seus emails
        return user ?? null // Retorna null se user for undefined ou 
    }

    static createUser(fullName, email) {
        const emailExists = App.findUserByEmail(email)
        if (!emailExists) {
            const user = new User(fullName, email)
            App.#_users.push(user)
        } else {
            throw new Error("Email já cadastrado.")
        }
    }

    static deposit(email, value) {
        const user = App.findUserByEmail(email)
        if (user) {
            const deposit = new Deposit(value)
            user.account.addDeposit(deposit)
        } else {
            throw new Error("O usúario não possui cadastro.");
        }
    }

    static transfer(fromEmail, toEmail, value) {
        const emitter = App.findUserByEmail(fromEmail)
        const receiver = App.findUserByEmail(toEmail)
        
        if (emitter && receiver) {
            const transfer = new Transfer(emitter, receiver, value)
            emitter.account.addTransfer(transfer)
            receiver.account.addTransfer(transfer)
        } else if (!emitter && !receiver) { // Mensagens diferentes para melhor entendimento
                throw new Error("Ambos usuários não estão cadastrados.");
            } else if (!emitter) { 
                throw new Error("O usúario emitente não possui cadastro.");
            } else if (!receiver) {
                throw new Error("O usúario recebedor não possui cadastro.");
            } 
    }

    static takeLoan(email, value, installmentsQuantity) {
        const user = App.findUserByEmail(email)
        if (user) {
            const loan = new Loan(value, installmentsQuantity)
            user.account.addLoan(loan)
        } else {
            throw new Error("O usúario não possui cadastro.");
            
        }
    }

    static changeLoanInterest(newRate) {
        Loan.interestRate = newRate // Usa o setter para declarar a nova taxa
    }
}