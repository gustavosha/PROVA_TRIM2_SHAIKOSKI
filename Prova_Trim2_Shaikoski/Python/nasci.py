meses = {
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
}

mes_nascimento = int(input("Digite o mês do seu nascimento em números: "))

for mes, numero in meses.items():
    if numero <= mes_nascimento:
        print(mes)

print("Nasci em", list(meses.keys())[mes_nascimento-1])