import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import API from "../pages/API/cadastroUser.api"

Given('que faço um requisição na API createAccount', () => {
    API.requisiçãoRegister()
})

Then('valido a criação de usuario e sua resposta', () => {
    API.validarResponse()
})