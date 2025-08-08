const touristName = prompt("✈️ Por favor, informe seu nome:");
const touristStart = confirm("Você já visitou alguma cidade?");
let userConfirm;
let newCity;
const touristCities = [];

function showCities(touristCities) {
    let citiesList = "";
    touristCities.forEach((city, i) => {
        if (i + 1 === touristCities.length) {
            citiesList += `${i + 1} - ${city}`;
        } else {
            citiesList += `${i + 1} - ${city}\n`;
        }
    });
    alert(`📍 Cidades que "${touristName}" já visitou:\n\n${citiesList || "Nenhuma cidade registrada."}`);
}

if (touristStart) {
    do {
        userConfirm = confirm(`🌍 ${touristName}, você já visitou outra cidade?`);
        if (userConfirm) {
            newCity = prompt("🏙️ Por favor, informe o nome da cidade:");
            touristCities.push(newCity);
            alert(`✅ Cidade "${newCity}" adicionada à sua lista!`);
        } else {
            alert("✅ Registro finalizado!");
        }
    } while (userConfirm);
    showCities(touristCities);
} else {
    alert("ℹ️ Você ainda não visitou nenhuma cidade.");
}
