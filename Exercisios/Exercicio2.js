// 3. Leia o salário e aplique o aumento correspondente.

var salarioFuncionario = 3000 
var salarioComAumento = 4000

if (salarioFuncionario > 2000) {
    salarioComAumento = salarioFuncionario + salarioFuncionario * 0.10;
} else {
    if (salarioFuncionario < 1000) {
        salarioComAumento = salarioFuncionario + salarioFuncionario * 0.20;
    } else {
        salarioComAumento = salarioFuncionario + salarioFuncionario * 0.15;
    }
}

console.log("Salário com aumento: R$ " + salarioComAumento);
