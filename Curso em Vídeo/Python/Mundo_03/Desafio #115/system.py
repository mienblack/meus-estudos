from lib.interface import *
from lib.arquive import *
from time import sleep

arqNome = 'text.txt'

if not arquivoExiste(arqNome):
    criarArquivo(arqNome)

while True:
    res = menu(['Ver Pessoas Cadastradas', 'Cadastrar Nova Pessoa', 'Sair do Sistema'])
    if res == 1:
        cabeçalho('Opção 01')
        lerArquivo(arqNome)
    elif res == 2:
        cabeçalho('Opção 02')
        nome = str(input('Nome: ')).capitalize()
        idade = leiaInt('Idade: ')
        cadastrar(arqNome, nome, idade)
    elif res == 3:
        cabeçalho('Saindo do Sistema... Até Logo!')
        break
    else:
        print('ERRO! Digite uma opção válida.')
        sleep(2)