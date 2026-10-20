// Escreva um programa que converta uma temperatura de Celsius para Fahrenheit para celsius e vice-versa.

var temperatura = 80

var tipoTemperatura = "" 

var temperaturaConvertida = 0 

if (tipoTemperatura == "C") {
    console.log("você escolheu celsius!")
    temperaturaConvertida = ((temperatura * 1.8) + 32)
}else{
    console.log("você escolheu fahrenheit!")
    temperaturaConvertida = ((temperatura - 32) * (5 / 9))
}


console.log("O valor convertido é:" + temperaturaConvertida)