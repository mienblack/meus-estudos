from lib.interface import *

def arquivoExiste(name):
    try:
        arq = open(name, 'rt')
        arq.close()
    except FileNotFoundError:
        return False
    else:
        return True

def criarArquivo(name):
    try:
        arq = open(name, 'wt+')
        arq.close()
    except:
        print('Houve um ERRO na criação do arquivo!')
    else:
        print(f'Arquivo {name} criado com sucesso!')

def lerArquivo(name):
    try:
        arq = open(name, 'rt')
    except:
        print('ERRO ao ler o arquivo!')
    else:
        cabeçalho('PESSOAS CADASTRADAS')
        for line in arq:
            dado = line.split(';')
            dado[1] = dado[1].replace('\n', '')
            print(f'{dado[0]:<30}{dado[1]:>3} anos')
    finally:
        arq.close()

def cadastrar(arq, nome='desconhecido', idade=0):
    try:
        a = open(arq, 'at')
    except:
        print('Houve um ERRO na abertura do arquivo!')
    else:
        try:
            a.write(f'{nome}; {idade}\n')
        except:
            print('Houve um ERRO na hora de escrever os dados!')
        else:
            print(f'Houve novo registro de {nome} adicionado.')
            a.close()

