// 10. Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida:

var dia = 40;
var mes = 40;
var ano = 2024;

var dataValida = false;
var dia = 0;

if (ano > 0) {
  if (mes >= 1) {
    if (mes <= 12) {
      
      if (mes == 1) {
        dia = 31;
      }
      if (mes == 2) {
        dia = 28;
      }
      if (mes == 3) {
        dia = 31;
      }
      if (mes == 4) {
        dia = 30;
      }
      if (mes == 5) {
        dia = 31;
      }
      if (mes == 6) {
        dia = 30;
      }
      if (mes == 7) {
        dia = 31;
      }
      if (mes == 8) {
        dia = 31;
      }
      if (mes == 9) {
        dia = 30;
      }
      if (mes == 10) {
        dia = 31;
      }
      if (mes == 11) {
        dia = 30;
      }
      if (mes == 12) {
        dia = 31;
      }

      if (dia >= 1) {
        if (dia <= dia) {
          dataValida = true;
        }
      }
    }
  }
}

if (dataValida) {
  console.log("A data é válida.");
} else {
  console.log("A data é inválida.");
}