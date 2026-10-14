// string = text
// boolean =true / false
// float = number with a decimal 'quebrados' com virgulas 
// int = integer 


// Variaveis  
var idadeUsuario = 18 

// exibe mensagem na tela 
console.log("idadeUsuario: " + idadeUsuario) 
// o simbolo "+" quando usado com texto a funcão dele é "concatenar" 

//"=" é o operador de atribuição, ou seja, ele atribui o valor a variavel 
// "==" é o operador de comparação, ou seja, ele compara o valor da variavel com outro valor
// ">" é o operador de comparação, ou seja, ele compara se o valor da variavel é maior que outro valor
// "<" é o operador de comparação, ou seja, ele compara se o valor da variavel é menor que outro valor 
// ">=' é o operador de comparação, ou seja, ele compara se o valor da variavel é maior ou igual a outro valor"


console.log(idadeUsuario == 20)

console.log(idadeUsuario >= 20)

console.log(idadeUsuario < 20)

// Ao ter a comparação, o resultado será um booleano (true ou false) 

// se 
if (idadeUsuario >= 18){
    console.log("o usuário já pode dirigir")

} else {
    console.log("o usuário ainda não pode dirigir")
} 
