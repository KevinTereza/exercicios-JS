export class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        const correctEmail = email === this.email ? true : false
        const correctPassword = password === this.password ? true : false
        switch (true) {
            case correctEmail && correctPassword:
                alert("✅ Logado com sucesso.")
                console.log(`${this.fullname} fez login.`)
                break;
            case correctEmail && !correctPassword:
                alert(`❌ As senhas não coincidem.`)
                break;
            case !correctEmail && correctPassword:
                alert(`❌ Os emails não coincidem.`)
                break;
            default:
                alert(`❌ Os campos não coincidem.`)
                break;
        }
    }
}