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

def get_estacao(mes, dia):
    if (mes == 12 and dia >= 21) or (mes == 1 and dia < 21) or (mes == 2):
        return "Verão"
    elif (mes == 3 and dia >= 21) or (mes == 4) or (mes == 5) or (mes == 6 and dia < 21):
        return "Outono"
    elif (mes == 6 and dia >= 21) or (mes == 7) or (mes == 8) or (mes == 9 and dia < 23):
        return "Inverno"
    elif (mes == 9 and dia >= 23) or (mes == 10) or (mes == 11) or (mes == 12 and dia < 21):
        return "Primavera"

mes_numero = int(input("Digite o número do mês: "))
dia_numero = int(input("Digite o dia do mês: "))

for mes, numero in meses.items():
    if numero == mes_numero:
        estacao = get_estacao(numero, dia_numero)
        print(f"O mês é {mes} e a estação é {estacao}")