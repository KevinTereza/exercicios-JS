let userMoney = Number(prompt("💰 Informe o valor inicial disponível:").replace(",", "."))
let userOption

function depositMoney() {
    let depositAmount = Number(prompt(`💰 Saldo atual: R$ ${userMoney.toFixed(2)}\n\nQual valor deseja depositar?`).replace(",", "."))
    userMoney += depositAmount
    alert(`✅ Depósito realizado com sucesso!\n\n💰 Saldo atual: R$ ${userMoney.toFixed(2)}`)
}

function withdrawMoney() {
    let withdrawAmount = Number(prompt(`💰 Saldo atual: R$ ${userMoney.toFixed(2)}\n\nQual valor deseja sacar?`).replace(",", "."))
    if (withdrawAmount <= userMoney) {
        userMoney -= withdrawAmount
        alert(`✅ Saque realizado com sucesso!\n\n💰 Saldo atual: R$ ${userMoney.toFixed(2)}`)
    } else {
        alert("⚠️ Saldo insuficiente para realizar o saque.")
    }
}

do {
    userOption = Number(prompt(`💲 Controle Financeiro - Menu Principal\n\n💰 Saldo atual: R$ ${userMoney.toFixed(2)}\n\n1 - Depositar dinheiro\n2 - Sacar dinheiro\n3 - Sair do sistema\n\nEscolha uma opção (1-3):`))

    switch (userOption) {
        case 1:
            depositMoney()
            break
        case 2:
            withdrawMoney()
            break
        case 3:
            alert("🚪 Saindo do sistema... Até logo!")
            break
        default:
            alert("⚠️ Opção inválida! Por favor, digite um número entre 1 e 3.")
            break
    }
} while (userOption !== 3)
