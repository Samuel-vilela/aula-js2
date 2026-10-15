//Crie um programa que leia três números e determine qual é o maior.

      var numero1 = 10;
      var numero2 = 2;
      var numero3 = 3;

// if (numero1 > numero2 == numero1 > numero3) {

//     console.log("O maior número é: " + numero1);

// } else if (numero2 > numero1 == numero2 > numero3) {

//     console.log("O maior número é: " + numero2);

// } else {
//     console.log("O maior número é: " + numero3);
// }

      var numero1 = 2;
      var numero2 = 2;
      var numero3 = 2;

if (numero1 == numero2) {
    if (numero1 == numero3) {
        console.log("Todos os números são iguais: " + numero1)
    }
}
if (numero1 > numero2) {
    if (numero1 > numero3) {
        console.log("O maior número é: " + numero1)
    }
}

if (numero2 > numero1) {
    if (numero2 > numero3) {
        console.log("O maior número é: " + numero2)
    }
} 

if (numero3 > numero1) {
    if (numero3 > numero2) {
        console.log("O maior número é: " + numero3)
    }   
}
