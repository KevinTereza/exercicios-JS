export class Account {
    #_balance = 0
    constructor(owner) {
        this.owner = owner
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get _balance() {
        return this.#_balance
    }

    addDeposit(deposit) {
        this.#_balance += deposit.value // Soma o saldo com o valor do deposito
        this.deposits.push(deposit) // Adiciona esse deposito ao array deposits
    }

    addLoan(loan) {
        this.#_balance += loan.value // Soma o saldo com o valor do empréstimo
        this.loans.push(loan) // Adiciona esse emprestimo ao array loans
    }

    addTransfer(transfer) {
        if (transfer.fromUser.email === this.owner.email) { // Checa se o email do emitente é igual ao do dono desta conta
            this.#_balance -= transfer.value
            this.transfers.push(transfer)
        } else if (transfer.toUser.email === this.owner.email) { // Chega se o email do recebedor é igual ao do dono desta conta
            this.#_balance += transfer.value
            this.transfers.push(transfer)
        }
    }
}