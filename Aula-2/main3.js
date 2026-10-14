// Escreva um programa que converta uma temperatura digitada em Celsius para Fahrenheit. 
var temperatura = 65
var tipoTemperatura = "F" // C = Celsius, F = Fahrenheit        
var temperaturaConvertida = 0 

if (tipoTemperatura == "C") {
    console.log("você escolheu celsius!")
    temperaturaConvertida = ((temperatura * 1.8) + 32)
}else{
    console.log("você escolheu fahrenheit!")
    temperaturaConvertida = ((temperatura - 32) * (5 / 9))
}


console.log("O valor convertido é:" + temperaturaConvertida)