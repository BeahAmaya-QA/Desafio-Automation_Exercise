#utf-8
#language: pt

Funcionalidade: Realizar cadastro e adicionar um produto no carrinho
    Cenario: Realizar cadastro e adicionar um produto no carrinho
        Dado que acessei o portal automation exercise
        E acesso Signup_Login
        E preencho o formulario de novo usuario e pressione inscrever
        E preencho o formulario de informações e pressione criar conta
        E valido que a conta foi criada com sucesso e pressione continue
        Quando valido que o usuario esta logado
        E localizo o produto Men Tshirt e pressiono View Product
        E pressiono add to cart, valido a inserção com sucesso e pressiono View Cart
        Então valido as informações nome e valor do produto no carrinho