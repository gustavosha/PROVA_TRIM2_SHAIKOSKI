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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o mês do seu nascimento em números: ', (mesNascimento) => {
  mesNascimento = parseInt(mesNascimento);

  for (const mes in meses) {
    if (meses[mes] <= mesNascimento) {
      console.log(mes);
    }
  }

  console.log("Nasci em", Object.keys(meses)[mesNascimento - 1]);
  rl.close();
});
