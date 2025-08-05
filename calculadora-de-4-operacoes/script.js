const firstNumber = Number(prompt("Informe o primeiro número:"))
const secondNumber = Number(prompt("Informe o segundo número:"))

function operations(fnumber, snumber) {
    const addition = `${fnumber} + ${snumber} = ${fnumber + snumber}\n`
    const subtraction = `${fnumber} - ${snumber} = ${fnumber - snumber}\n`
    const multiplication = `${fnumber} * ${snumber} = ${fnumber * snumber}\n`
    const division = snumber || snumber !== 0 
    ? `${fnumber} ÷ ${snumber} = ${fnumber / snumber}`
    : `${fnumber} ÷ ${snumber} = Não é possível dividir por zero.`

    const result = addition + subtraction + multiplication + division
    return result                                                                                 
}

alert("⚙️ Calculando resultados..")
alert(`Resultados: \n${operations(firstNumber, secondNumber)}`)