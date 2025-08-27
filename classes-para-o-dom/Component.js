export class Component {
    #componentReference // Cria o atributo privado
    constructor(tagName) {
        this.build(tagName) //  cria o elemento no DOM 
    }

    build(tagName) {
        return this.#componentReference = document.createElement(`${tagName}`) // Atualiza o atributo privado e cria outro elemento no DOM se for o caso
    }

    readValue() {
        return console.log(`O Valor do componente "<${this.#componentReference.tagName}>" é: ${this.#componentReference.innerHTML}`) // Lê e "printa" o que tem dentro do elemento criado
    }

    render() {
        return document.body.appendChild(this.#componentReference) // Adiciona o elemento no body da página
    }

    getComponent() { // Poderia ser um getter, mas ainda não estudei isso 
        return this.#componentReference // Retorna o atributo privado e pode ter suas propriedades alteradas
    }

    updateComponent(element) { // Poderia ser um setter, mas ainda não estudei isso também
        return this.#componentReference = element // Atualiza o elemento DOM privado armazenado em #componentReference com o parâmetro passado 
    }
}