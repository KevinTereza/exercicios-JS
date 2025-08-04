const userFirstName = prompt("Qual é o seu primeiro nome?")
const userSecondName = prompt("Qual é o seu sobrenome?")
const userStudy = prompt("Qual é o seu campo de estudo?")
const userDateOfBirth = Number(prompt("Qual é o seu ano de nascimento?"))

function userValidation(fname, sname, study, date) {
    // primeiro retira os espaços, se é vazia ou sem valor === false, !fname inverte e faz passar na condição, então retorna false.
    if (!fname?.trim()) return false
    if (!sname?.trim()) return false
    if (!study?.trim()) return false
    if (!date || date <= 0) return false
    return true  
}

if (userValidation(userFirstName, userSecondName, userStudy, userDateOfBirth)) {
    const userAge = new Date().getFullYear() - userDateOfBirth
    alert("⚙️ Processando informações..");
    const user = `🪪 Informações do usuário: \nNome Completo: ${userFirstName} ${userSecondName}\nCampo de estudo: ${userStudy}\nIdade: ${userAge} anos`
    
    alert(user)
} else {
    alert("❌ Digite as informações corretamente para continuar.")
}

