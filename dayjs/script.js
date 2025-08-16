const dayjs = require("dayjs") // Importa a dependencia

const birthDay = (date) => {
    const birth = dayjs(date) // transforma a data para dayjs
    const now = dayjs() // pega a data atual
    const age = now.diff(birth, "year") // retorna a diferença de anos entre a data atual e o nascimento
    
    let nextBirthday = birth.year(now.year()) // cria o proximo aniversario copiando a data de nascimento mas trocando o ano pelo atual
    if (nextBirthday.isBefore(now, "day")) { // Verifica se o proximo aniversario já passou comparando (day !== date)
        nextBirthday = nextBirthday.add(1, "year") // Adiciona um ano a mais caso ja tenha passado
    }

    const daysToNextBirthday = nextBirthday.diff(now, "day") // Retorna a diferença de dias entre o proximo aniversario e hoje

    console.log(`Idade: ${age}`)
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias que faltam para o próximo aniversário: ${daysToNextBirthday}`)
}

birthDay("2008-11-06")