import { Component } from "./Component.js";

export class Label extends Component {
    constructor(value, tagName = "label") {
        super(tagName) // Cria a tag label
        this.component.innerText = `${value}` // Coloca o valor dentro da tag
    }

    build(value, tagName = "label") {
        const component = document.createElement(`${tagName}`) // Cria uma nova tag label
        component.innerText = `${value}` // Coloca o valor dentro da tag
        return this.component = component // Substitui o elemento DOM privado pelo novo componente
    }  
}