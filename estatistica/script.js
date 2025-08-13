const average = (...nums) => {
    const sum = nums.reduce((acc, num) => acc + num, 0 )
    const average = sum / nums.length
    return average
}

const weightedAverage = (...entries) => {
    const sum = entries.reduce((acc, { number, weight } // desestrutura o numero e peso do objeto 
    ) => acc + (number * weight), 0) // Faz a multiplicação do número * peso e depois a soma do reduce
    const weightSum = entries.reduce((acc, entry) => acc + entry.weight, 0) // pega o objeto(entry) e faz a soma do peso dele (entry.weight)
    return sum / weightSum // faz a divisao
}

const median = (...nums) => {
    const sorted = [...nums].sort((a, b) => a - b) // Copia o arr pra não dar problemas e organiza ele em ordem númerica
    const middle = Math.floor(sorted.length / 2) // pega o meio do arr mesmo se for par
    if (sorted.length % 2 === 0) { // verifica se o arr é par
        const firstMiddle = sorted[middle - 1] // pega o primeiro numero "do meio"
        const secondMiddle = sorted[middle] // pega o segundo numero "do meio"
        return average(firstMiddle, secondMiddle) // faz a media entre os dois números
    } else {
        return sorted[middle] // retorna o numero do meio
    }
}

const mode = (...nums) => {
    let qnt = nums.map(num => [ // Cria o primeiro arr (bidimensional)
        num, // Cria um sub arr com o numero e a quantidade de vezes que aparece
        nums.filter(n => n === num).length // Descobre a quantidade de vezes que aparece
    ]).sort((a, b) => b[1] - a[1]) // Ordena em ordem decrecente pelo segundo elemento
    return qnt[0][0]
}

console.log(`O resultado da Média Aritmética Simples é: ${average(2, 6, 3, 7, 4)}`)
console.log(`O resultado da Média Aritmética Ponderada é: ${weightedAverage(
    { number: 7, weight: 2 },
    { number: 9, weight: 5 },
    { number: 3, weight: 1 }
)}`)

console.log(`O resultado da Mediana é: ${median(2, 4, 5, 7, 42, 99)}`)
console.log(`O resultado da Moda é: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)