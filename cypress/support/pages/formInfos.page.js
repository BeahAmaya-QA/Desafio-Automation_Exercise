import { faker } from '@faker-js/faker';

const TITLE = 'input[name="title"][value="Mrs"]';
const PASSWORD = '[data-qa="password"]';
const DAY = '[data-qa="days"]';
const MONTH = '[data-qa="months"]';
const YEAR = '[data-qa="years"]';
const FIRST_NAME = '[data-qa="first_name"]';
const LAST_NAME = '[data-qa="last_name"]';
const COMPANY = '[data-qa="company"]';
const ADDRESS = '[data-qa="address"]';
const COUNTRY = '[data-qa="country"]';
const STATE = '[data-qa="state"]';
const CITY = '[data-qa="city"]';
const CEP = '[data-qa="zipcode"]';
const PHONE = '[data-qa="mobile_number"]';
const CREATE_COUNT = '[data-qa="create-account"]';
const TEXT_COUNT_CREATE = '[data-qa="account-created"]';
const CONTINUE_BUTTON = '[data-qa="continue-button"]';
const TEXTO_USUARIO_LOGADO = 'Logged in as';

class formInfos {

  preenchimentoFormInfos() {

    
    const userInfo = {
      password: faker.internet.password(10),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      company: faker.company.companyName(),
      address: faker.address.streetAddress(),
      state: faker.address.state(),
      city: faker.address.city(),
      cep: faker.address.zipCode(),
      phone: faker.phone.phoneNumber(),
    };
    
    cy.get(TITLE).click();
    cy.get(PASSWORD).type(userInfo.password);
    cy.get(DAY).select('6');
    cy.get(MONTH).select('December');
    cy.get(YEAR).select('1999');
    cy.get(FIRST_NAME).type(userInfo.firstName);
    cy.get(LAST_NAME).type(userInfo.lastName);
    cy.get(COMPANY).type(userInfo.company);
    cy.get(ADDRESS).type(userInfo.address);
    cy.get(COUNTRY).select('United States');
    cy.get(STATE).type(userInfo.state);
    cy.get(CITY).type(userInfo.city);
    cy.get(CEP).type(userInfo.cep);
    cy.get(PHONE).type(userInfo.phone);
    cy.get(CREATE_COUNT).click();
  }

  validacaoContaSucesso() {
    cy.get(TEXT_COUNT_CREATE).should('be.visible');
    cy.get(CONTINUE_BUTTON).click();
  }

  validarUsuarioLogado() {
    const firstName = Cypress.env('userName');

    expect(firstName, 'userName deve existir').to.exist;

    cy.contains(TEXTO_USUARIO_LOGADO)
      .should('be.visible')
      .find('b')
      .should('be.visible')
      .and('have.text', firstName);
}
}

export default new formInfos();