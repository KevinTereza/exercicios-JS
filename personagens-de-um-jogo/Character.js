/*
1. Crie a classe Character:
   - Atributos: name, lifePoints, attackPoints, defensePoints
   - Método: attack(target) → tira da vida do alvo a diferença entre ataque e defesa
*/

export default class Character {
    constructor(name, lifePoints, attackPoints, defensePoints) {
        this.name = name,
        this.lifePoints = lifePoints,
        this.attackPoints = attackPoints,
        this.defensePoints = defensePoints
    }

    attack(target) {
        const damage = this.attackPoints - target.defensePoints
        target.lifePoints -= damage
        console.log(`O personagem "${this.name}" está atacando "${target.name}" e causou ${damage} pontos de dano!`)
    }
}