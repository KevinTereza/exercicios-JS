import { Installment } from "./Installment.js"


export class Loan {
  static #_interestRate = 1.05

  static get interestRate() {
    return Loan.#_interestRate
  }

  static set interestRate(newPercentage) {
    Loan.#_interestRate = 1 + (newPercentage / 100)
  }

  constructor(value, installmentsQuantity) {
    this.value = value
    this.installments = [] // ICria um array para guardar cada parcela
    for (let i = 0; i <= installmentsQuantity; i++) { // Itera sobre cada número até a quantidade de parcelas
      this.installments.push(new Installment(value * Loan.#_interestRate / (installmentsQuantity, i))) // Coloca no array as parcelas passando o valor multiplicado pela taxa e divido na quantidade de parcelas, coloca que o número da parcela é igual aquele que o for está atualmente
      this.createdAt = new Date()
    } 
  }
}