def aumentar(valor=0, porcent=0, formato=False):
    r = valor + valor*(porcent/100)
    return r if formato is False else moeda(r)

def diminuir(valor=0, porcent=0, formato=False):
    r = valor - valor*(porcent/100)
    return r if formato is False else moeda(r)

def dobro(valor=0, formato=False):
    r = valor*2
    return r if formato is False else moeda(r)

def metade(valor=0, formato=False):
    r = valor/2
    return r if formato is False else moeda(r)

def moeda(valor=0, moeda='R$'):
    return f'{moeda}{valor:.2f}'.replace('.', ',')

def resumo(valor=0, taxaAum=0, taxaRed=0):
    print('-'*30)
    print('RESUMO DO VALOR'.center(30))
    print('-'*30)
    print(f'Preço Analisado: \t{moeda(valor)}')
    print(f'Dobro do preço: \t{dobro(valor, True)}')
    print(f'Metade do preço: \t{metade(valor, True)}')
    print(f'{taxaAum}% de aumento: \t{aumentar(valor, taxaAum, True)}')
    print(f'{taxaRed}% de aumento: \t{aumentar(valor, taxaRed, True)}')
    print('-'*30)
