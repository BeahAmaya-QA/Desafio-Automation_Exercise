const produtoMenTshirt = 'p'
const ViewProduto = 'a[href="/product_details/2"]'
const valorProduto = '.product-information span span'
const nomeProduto = '.product-information > h2'
const addCart = '.btn.btn-default.cart'
const modalConfirm = '.modal-body > p'
const viewCart = 'a[href="/view_cart"]'

class AddToCart {
  
    localizaProduto(){

    cy.contains(produtoMenTshirt, 'Men Tshirt')
        .should('have.text', 'Men Tshirt')
        .parents('.product-image-wrapper')
        .find(ViewProduto)
        .should('contain.text', 'View Product')
        .click()
    
    }

    addCarinho(){
        
    cy.get(nomeProduto).invoke('text').as('nomeProduto')
    cy.get(valorProduto).invoke('text').as('valorProduto')

    cy.get(addCart).click()
    cy.get(modalConfirm)
        .should('have.text', 'Your product has been added to cart.View Cart')
        .find(viewCart).click()
    }

    validarCarrinhoProduto(){
        
    
    //valida nome do produto no carrinho
  cy.get('@nomeProduto').then(nome => {
    cy.get('.cart_description > h4')
      .should('contain.text', nome.trim())
  })

  // valida valor do produto no carrinho
  cy.get('@valorProduto').then(valor => {
    cy.get('.cart_price > p')
      .should('contain.text', valor.trim())
  })

    }


}

export default new AddToCart();
