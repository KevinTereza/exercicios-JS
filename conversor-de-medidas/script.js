let userMeasure
do {
    userMeasure = Number(prompt("Conversor de Medidas\n\nInforme um valor em metros (m) para converter:"))
    if (isNaN(userMeasure)) alert("⚠️ Informe um valor númerico em metros para continuar.")
} while (isNaN(userMeasure))

let userOption
let conversion

do {
    userOption = Number(prompt(`📐 Escolha a unidade para conversão:\n1 - Milímetro (mm)\n2 - Centímetro (cm)\n3 - Decímetro (dm)\n4 - Decâmetro (dam)\n5 - Hectômetro (hm)\n6 - Quilômetro (km)\n7 - Sair do sistema`));

    switch (userOption) {
        case 1: // milímetro (mm)
            conversion = userMeasure * 1000
            alert(`✅ ${userMeasure}m em milímetros são: ${conversion}mm`)
            break;
        case 2: // centímetro (cm)
            conversion = userMeasure * 100
            alert(`✅ ${userMeasure}m em centímetros são: ${conversion}cm`)
            break;
        case 3: // decímetro (dm)
            conversion = userMeasure * 10
            alert(`✅ ${userMeasure}m em decímetros são: ${conversion}dm`)
            break;
        case 4: // decâmetro (dam)
            conversion = userMeasure / 10
            alert(`✅ ${userMeasure}m em decâmetros são: ${conversion}dam`)
            break;
        case 5: // hectômetro (hm)
            conversion = userMeasure / 100
            alert(`✅ ${userMeasure}m em hectômetros são: ${conversion}hm`)
            break;
        case 6: // quilômetro (km)
            conversion = userMeasure / 1000
            alert(`✅ ${userMeasure}m em quilômetros são: ${conversion}km`)
            break;
        case 7:
            alert("🚪 Você escolheu sair do sistema.")
            alert("Encerrando...")
            break;
        default:
            alert("⚠️ Escolha umas das medidas válidas para continuar.")
            break;
    }
} while (userOption !== 7)

    

    