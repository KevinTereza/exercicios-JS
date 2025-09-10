async function calculateImc(weight, height) { // Já cria uma new Promise
    if (isNaN(weight) || isNaN(height)) {
            return Promise.reject("Os valores informados precisam ser números.") // funciona como reject()
            
        } else {
            return (weight / (height**2)) // funciona como resolve()
        }
}

async function printImc(weight, height) { // Já cria uma new Promise para usar o await
    try { // Trata como o .then
        const imcNumber = await calculateImc(weight, height) // espera pelo calculo e retorna o result ou erro

        if (imcNumber <= 18.5) {
            console.log(`Abaixo de 18,5: Magreza (IMC = ${imcNumber.toFixed(2)})`)
        } else if (imcNumber <= 24.9) {
            console.log(`Entre 18,5 e 24,9: Normal (IMC = ${imcNumber.toFixed(2)})`)
        } else if (imcNumber <= 29.9) {
            console.log(`Entre 25 e 29,9: Sobrepeso (IMC = ${imcNumber.toFixed(2)})`)
        } else if (imcNumber <= 39.9) {
            console.log(`Entre 30 e 39,9: Obesidade (IMC = ${imcNumber.toFixed(2)})`)
        } else {
            console.log(`Acima de 40: Obesidade Grave (IMC = ${imcNumber.toFixed(2)})`)
        }
    } catch (err) { // trata como o .catch
        console.log(err)
    }
}

printImc(65, "1.70")   