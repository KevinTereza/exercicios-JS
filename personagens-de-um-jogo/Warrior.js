/*
4. Crie a classe Warrior (herda de Character):
   - Novos atributos: shieldPoints e position (attack ou defense)
   - Sobrescreve attack(target) → só ataca se position = "attack"
   - Novo método: switchPosition() → alterna entre attack e defense
       - Se defense: defesa = defesa + escudo
       - Se attack: defesa volta ao normal
*/

import Character from "./Character.js";

export default class Warrior extends Character {
    constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints) {
        super(name, lifePoints, attackPoints, defensePoints)
        this.shieldPoints = shieldPoints,
        this.position = true
    }

    attack(target) {
        if (this.position === true) {
            super.attack(target)
        } else {
            console.log(`O personagem "${this.name} (guerreiro)" não está em posição de ataque.`)
        }
    }

    switchPosition() {
        if (this.position === true) {
            this.position = false // defesa
            this.defensePoints += this.shieldPoints
        } else {
            this.position = true // ataque 
            this.defensePoints -= this.shieldPoints
        }
    }
}