import { User } from "./scripts/user.js"
const kevin = new User(
    "Kevin Tereza", 
    "kevin@gmail.com", 
    1234
)

import { Product } from "./scripts/product.js"
const teclado = new Product(
    "Teclado Mecânico RGB",
    "Teclado mecânico com iluminação RGB, switches azuis e layout ABNT2",
    350
)

// Métodos da classe User
const email = prompt("Informe o email:") 
const password = Number(prompt("Informe a senha de QUATRO DIGITOS:"))
kevin.login(email, password)

// Métodos da classe Product
const quantify = Number(prompt(`Qual é a quantidade de "${teclado.name}" que você quer adicionar ao estoque?`))
teclado.addToStock(quantify)
const discount = Math.floor(Number(prompt("Informe o valor de desconto que deseja calcular:")))
teclado.calculateDiscount(discount)