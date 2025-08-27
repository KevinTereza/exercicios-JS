/*
3. Crie a classe Mage (herda de Character):
   - Novo atributo: magicPoints
   - Sobrescreve attack(target) → usa ataque + magia contra defesa
   - Novo método: heal(target) → cura o alvo em 2x os pontos de magia
*/

import Character from "./Character.js";

export default class Mage extends Character {
    constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
        super(name, lifePoints, attackPoints, defensePoints)
        this.magicPoints = magicPoints
    }

    attack(target) {
        const damage = (this.attackPoints + this.magicPoints) - target.defensePoints
        target.lifePoints -= damage
        console.log(`O personagem "${this.name} (mago)" está atacando "${target.name}" e causou ${damage} pontos de dano!`)
    }

    heal(target) {
        const heal = this.magicPoints * 2
        target.lifePoints += heal
        console.log(`O personagem "${this.name} (mago)" está curando "${target.name}" e recuperou ${heal} pontos de vida!`)
    }
}