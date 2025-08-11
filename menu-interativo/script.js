let userOption

do {
    userOption = Number(prompt(`📱 Celular - Menu Principal\n\n1 - Galeria\n2 - Telefone\n3 - Mensagens\n4 - Configurações\n5 - Sair do sistema\n\nEscolha uma opção (1-5):`))

    switch (userOption) {
        case 1:
            alert("📸 Você abriu a Galeria.")
            break;
        case 2:
            alert("📞 Você acessou o Telefone.")
            break;
        case 3:
            alert("💬 Você abriu as Mensagens.")
            break;
        case 4:
            alert("⚙️ Você entrou em Configurações.")
            break;
        case 5:
            alert("🚪 Saindo do sistema... Até logo!")
            break;
        default:
            alert("⚠️ Opção inválida! Por favor, digite um número de 1 a 5.")
            break;
    }

} while (userOption !== 5)