 const SIGNUP_LOGIN = 'a[href="/login"]'

 class portal{

    acessarSignupLogin(){
        cy.get(SIGNUP_LOGIN).click()
    }

 }

 export default new portal()