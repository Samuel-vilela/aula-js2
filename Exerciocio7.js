// Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.


     var numero1 = 9;

     var numero2 = 5;

     var operacao = "multiplicação"; 

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