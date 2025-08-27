import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const someComponent = new Component("hr")
someComponent.render()
const form = new Form("form")
const label = new Label("Informe seu texto:")
const input = new Input("Digite seu texto aqui..")
form.addChildren(label, input)
form.render()