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
