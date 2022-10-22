def linha(tam=45):
    return '-'*tam

def cabeçalho(title):
    print(linha())
    print(title.center(45))
    print(linha())

def leiaInt(msg):
    ok = False
    while not ok:
        try:
            inteiro = int(input(msg))
        except KeyboardInterrupt:
            print('O usuário preferiu não digitar esse valor')
            ok = True
            return 0
        except (ValueError, TypeError):
            print(f'ERRO: Por favor, digite um valor inteiro válido.')
        else:
            ok = True
            return inteiro

def menu(lista):
    cabeçalho('MENU PRINCIPAL')
    c = 1
    for item in lista:
        print(f'{c} -  {item}')
        c += 1
    print(linha())
    opc = leiaInt('Sua opção: ')
    return opc
