import { Component } from "./Component.js";

export class Input extends Component {
    constructor(placeholder, tagName = "input") {
        super(tagName) // Cria a tag input
        this.getComponent().placeholder = placeholder // Coloca o placeholder em suas propriedades
    }

    build(placeholder, tagName = "input") {
        const component = document.createElement(`${tagName}`) // Cria novo elemento input
        component.placeholder = placeholder // Adiciona o placeholder em suas propriedades
        return this.updateComponent(component) // Usa o método para atualizar o atributo/elemento privado (#componenteReference = component)
    }
}