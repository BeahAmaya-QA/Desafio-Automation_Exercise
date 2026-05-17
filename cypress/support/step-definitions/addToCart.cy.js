import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import carrinho from "../pages/addToCart.page"

And('localizo o produto Men Tshirt e pressiono View Product', () =>{
    carrinho.localizaProduto()
});

And('pressiono add to cart, valido a inserção com sucesso e pressiono View Cart', () =>{
    carrinho.addCarinho()
});

Then('valido as informações nome e valor do produto no carrinho', () =>{
    carrinho.validarCarrinhoProduto()
});