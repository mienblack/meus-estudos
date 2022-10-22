def leiaDinheiro(txt):
    valid = False
    while not valid:
        entrada = str(input(txt)).strip().replace(',', '.')
        if entrada.isalpha() or entrada == '':
            print(f'ERRO: "{entrada}" é um valor inválido!')
        else:
            valid = True
            return float(entrada)
