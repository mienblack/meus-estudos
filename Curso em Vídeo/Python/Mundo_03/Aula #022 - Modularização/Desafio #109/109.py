import moedas

v = float(input('Digite um valor: R$'))
print(f'A metade de {moedas.moeda(v)} é {moedas.metade(v, formato=True)}')
print(f'O dobro de {moedas.moeda(v)} é {moedas.dobro(v, formato=True)}')
p = float(input('Porcentagem a aumentar: '))
print(f'Aumentando {p}% de {moedas.moeda(v)}, temos {moedas.aumentar(v, p, formato=True)}')
p = float(input('Porcentagem a diminuir: '))
print(f'Diminuindo {p}% de {moedas.moeda(v)}, temos {moedas.diminuir(v, p, formato=True)}')
