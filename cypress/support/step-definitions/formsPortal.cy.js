import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import Cadastro from "../pages/formSignup.page"
import FormInfos from "../pages/formInfos.page"

And('preencho o formulario de novo usuario e pressione inscrever', () => {
    Cadastro.preenchimentoFormSignup()
});

And('preencho o formulario de informações e pressione criar conta', () => {
    FormInfos.preenchimentoFormInfos()
});

Then('valido que a conta foi criada com sucesso e pressione continue', () => {
    FormInfos.validacaoContaSucesso()
});

When('valido que o usuario esta logado', () => {
    FormInfos.validarUsuarioLogado()
})