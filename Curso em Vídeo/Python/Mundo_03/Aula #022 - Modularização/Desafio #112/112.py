from utilidadesCeV import moedas
from utilidadesCeV import dados

v = dados.leiaDinheiro('Digite um valor: R$')
moedas.resumo(v, 20, 10)
