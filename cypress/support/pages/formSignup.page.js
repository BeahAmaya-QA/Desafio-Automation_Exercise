import { faker } from '@faker-js/faker';

const NOME_USER = '[data-qa="signup-name"]'
const EMAIL_USER = '[data-qa="signup-email"]'
const PASSWORD = '[data-qa="password"]';
const SIGNUP_BUTTON = '[data-qa="signup-button"]'


const LOGIN_EMAIL = '[data-qa="login-email"]';
const LOGIN_PASSWORD = '[data-qa="login-password"]';
const SIGNIN_BUTTON = '[data-qa="login-button"]'

class formulario{

preenchimentoFormSignup(){
   const usuario = {
        firstName: faker.name.firstName(),
        email: faker.internet.email(),
  };
     Cypress.env('userName', usuario.firstName);

        cy.get(NOME_USER).type(usuario.firstName)
        cy.get(EMAIL_USER).type(usuario.email)
        cy.get(SIGNUP_BUTTON).click()
    }

}
export default new formulario()
 