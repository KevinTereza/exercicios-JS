function calculateImc(weight, height) {
    const p = new Promise((resolve, reject) => {
        if (isNaN(weight) || isNaN(height)) {
            reject("Os valores informados precisam ser números.")
            
        } else {
            resolve((weight / (height**2)))
        }
    })
    return p
}

function printImc(weight, height) {
    calculateImc(weight, height).then(result => {
        if (result < 18.5) {
            console.log(`Abaixo de 18,5: Magreza (IMC = ${result.toFixed(2)})`)
        } else if (result <= 24.9) {
            console.log(`Entre 18,5 e 24,9: Normal (IMC = ${result.toFixed(2)})`)
        } else if (result <= 29.9) {
            console.log(`Entre 25 e 29,9: Sobrepeso (IMC = ${result.toFixed(2)})`)
        } else if (result <= 39.9) {
            console.log(`Entre 30 e 39,9: Obesidade (IMC = ${result.toFixed(2)})`)
        } else {
            console.log(`Acima de 40: Obesidade Grave (IMC = ${result.toFixed(2)})`)
        }
    }).catch(err => {
        console.log(err)
    })

    console.log("Executando depois de chamar a função")
}

printImc(65, "1.70")   
