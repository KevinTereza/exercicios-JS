const firstCarName = prompt("Informe o nome do primeiro carro:")
const firstCarSpeed = Number(prompt("Informe a velocidade do primeiro carro (km/h):"))

const secondCarName = prompt("Informe o nome do segundo carro:")
const secondCarSpeed = Number(prompt("Informe a velocidade do segundo carro (km/h):"))

if (firstCarSpeed > secondCarSpeed) {
    alert(`🏎️ ${firstCarName} (${firstCarSpeed} km/h) é mais rápido que ${secondCarName} (${secondCarSpeed} km/h)`)
} else if (firstCarSpeed === secondCarSpeed) {
    alert(`🏎️ Os dois carros estão na mesma velocidade!`)
} else {
    alert(`🏎️ ${secondCarName} (${secondCarSpeed} km/h) é mais rápido que ${firstCarName} (${firstCarSpeed} km/h)`)
}