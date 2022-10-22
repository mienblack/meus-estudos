import moedas

v = float(input('Digite um valor: R$'))
print(f'A metade de {moedas.moeda(v)} é {moedas.moeda(moedas.metade(v))}')
print(f'O dobro de {moedas.moeda(v)} é {moedas.moeda(moedas.dobro(v))}')
p = float(input('Porcentagem a aumentar: '))
print(f'Aumentando {p}% de {moedas.moeda(v)}, temos {moedas.moeda(moedas.aumentar(v, p))}')
p = float(input('Porcentagem a diminuir: '))
print(f'Diminuindo {p}% de {moedas.moeda(v)}, temos {moedas.moeda(moedas.diminuir(v, p))}')
