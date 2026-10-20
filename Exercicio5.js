//Faça um programa que leia o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado (média menor que 7).

var nome = "João";
var nota1 = 10;
var nota2 = 6;
var nota3 = 7;
var media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("O aluno " + nome + " está aprovado com média " + media);

} else {
    
    console.log("O aluno " + nome + " está reprovado com média " + media);
}         