import { App } from "./Classes/App.js";

try {
  App.createUser("Kevin Tereza", "kevin@email.com")
  App.createUser("Maria Silva", "maria@email.com")

  App.deposit("kevin@email.com", 500)
  console.log("✅ Depósito feito")

  App.transfer("kevin@email.com", "maria@email.com", 200)
  console.log("✅ Transferência feita")

  App.takeLoan("maria@email.com", 1000, 5)
  console.log("✅ Empréstimo feito")

  App.changeLoanInterest(8) // 8%
  console.log("✅ Taxa de juros alterada")

} catch (err) {
  console.error("❌ Erro:", err.message)
}
