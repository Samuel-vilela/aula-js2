// Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação ou divisão) e realize aperação entre os dois números. O programa deve exibir o resultado da operação.

var numero1 = 10;
var numero2 = 5;
var operacao = "subtração"; // Pode ser "adição", "subtração", "multiplicação" ou "divisão"
var resultado;

if (operacao == "adição") {
    resultado = numero1 + numero2;
}  

if (operacao == "subtração") {
    resultado = numero1 - numero2;
} 

if (operacao == "multiplicação") {
    resultado = numero1 * numero2;
} 

if (operacao == "divisão") {
    resultado = numero1 / numero2;
}

console.log("O resultado da operação é: " + resultado); 