def aumentar(valor=0, porcent=0):
    r = valor + valor*(porcent/100)
    return r

def diminuir(valor=0, porcent=0):
    r = valor - valor*(porcent/100)
    return r

def dobro(valor=0):
    r = valor*2
    return r

def metade(valor=0):
    r = valor/2
    return r

def moeda(valor=0, moeda='R$'):
    return f'{moeda}{valor:.2f}'.replace('.', ',')
