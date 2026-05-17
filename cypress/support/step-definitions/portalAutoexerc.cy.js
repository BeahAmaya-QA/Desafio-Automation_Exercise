import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import Portal from "../pages/portal.page"

Given('que acessei o portal automation exercise', () =>{
    cy.visit('/')
});

And('acesso Signup_Login', () =>{
    Portal.acessarSignupLogin()
});
