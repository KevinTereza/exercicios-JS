function fight (atName, atDmg, defName, defPoints, defShi) {
    let causedDamage
    const ifShield = defShi ? "🛡️ O defensor possui escudo!" : "🛡️ O defensor **não** possui escudo.";
    
    if (atDmg > defPoints && !defShi) {
        causedDamage = atDmg - defPoints
    } else if (atDmg > defPoints && defShi) {
        causedDamage = (atDmg - defPoints) / 2
    } else {
        causedDamage = 0
    }

    const defFinal = defPoints - causedDamage

    alert(`⚔️ Uma luta está acontecendo!\n\n🗡️ Atacante: ${atName}\n🩸 Poder de ataque: ${atDmg}\n\n🛡️ Defensor: ${defName}\n🛠️ Defesa: ${defPoints}\n${ifShield}\n\n💥 Dano causado: ${causedDamage}\n❤️ Defesa restante: ${defFinal}`);
}

const attackerName = prompt("🗡️ Informe o nome do atacante:")
const attackerDamage = Number(prompt("🩸 Informe o poder de ataque do atacante:"))
alert("✅ Informações do atacante salvas com sucesso!")

const defenderName = prompt("🛡️ Informe o nome do defensor:")
const defenderDefense = Number(prompt("❤️ Informe os pontos de defesa do defensor:"))
const defenderShield = confirm("🛡️ O defensor possui escudo?")
alert("✅ Informações do defensor salvas com sucesso!")

fight(attackerName, attackerDamage, defenderName, defenderDefense, defenderShield)
