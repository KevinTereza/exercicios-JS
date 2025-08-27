/*
2. Crie a classe Thief (herda de Character):
   - Sobrescreve attack(target) → dano é 2x a diferença entre ataque e defesa

*/

import Character from "./Character.js";

export default class Thief extends Character {
    attack(target) {
        const damage = (this.attackPoints - target.defensePoints) * 2
        target.lifePoints -= damage
        console.log(`O personagem "${this.name} (ladrão)" está atacando "${target.name}" e causou ${damage} pontos de dano!`)
    }
}