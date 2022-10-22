import moedas

v = float(input('Digite um valor: R$'))
print(f'A metade de R${v:.2f} é R${moedas.metade(v):.2f}')
print(f'O dobro de R${v:.2f} é R${moedas.dobro(v):.2f}')
p = float(input('Porcentagem a aumentar: '))
print(f'Aumentando {p}% de R${v:.2f}, temos R${moedas.aumentar(v, p):.2f}')
p = float(input('Porcentagem a diminuir: '))
print(f'Diminuindo {p}% de R${v:.2f}, temos R${moedas.diminuir(v, p):.27}')
