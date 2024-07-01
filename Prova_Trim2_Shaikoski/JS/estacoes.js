const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const meses = {
  "Janeiro": 1,
  "Fevereiro": 2,
  "Março": 3,
  "Abril": 4,
  "Maio": 5,
  "Junho": 6,
  "Julho": 7,
  "Agosto": 8,
  "Setembro": 9,
  "Outubro": 10,
  "Novembro": 11,
  "Dezembro": 12
};

function getEstacao(mes, dia) {
  if ((mes === 12 && dia >= 21) || (mes === 1 && dia < 21) || (mes === 2)) {
    return "Verão";
  } else if ((mes === 3 && dia >= 21) || (mes === 4) || (mes === 5) || (mes === 6 && dia < 21)) {
    return "Outono";
  } else if ((mes === 6 && dia >= 21) || (mes === 7) || (mes === 8) || (mes === 9 && dia < 23)) {
    return "Inverno";
  } else if ((mes === 9 && dia >= 23) || (mes === 10) || (mes === 11) || (mes === 12 && dia < 21)) {
    return "Primavera";
  }
}

rl.question('Digite o número do mês: ', (mesNumero) => {
  rl.question('Digite o dia do mês: ', (diaNumero) => {
    mesNumero = parseInt(mesNumero);
    diaNumero = parseInt(diaNumero);

    for (const mes in meses) {
      if (meses[mes] === mesNumero) {
        const estacao = getEstacao(mesNumero, diaNumero);
        console.log(`O mês é ${mes} e a estação é ${estacao}`);
        break;
      }
    }

    rl.close();
  });
});
