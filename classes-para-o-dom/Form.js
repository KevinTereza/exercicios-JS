import { Component } from "./Component.js";

export class Form extends Component {
    constructor(tagName) {
        super(tagName) // Cria a tag
    }

    addChildren(...components) {
        const componentForm = this.component // Pega o elemento DOM do form (#componentReference)
        components.forEach(c => componentForm.appendChild(c.component))
        // Para cada componente passado adiciona seu elemento DOM como filho do form
    }
}