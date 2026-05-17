const { faker } = require('@faker-js/faker')

class cadastroUserApi {

  requisiçãoRegister() {

    //Objeto para geração de dados dinâmicos
    const userData = {
      name: faker.name.fullName(),              
      email: `qa_${faker.internet.email()}`,
      password: faker.internet.password(10),

      firstname: faker.name.firstName(),        
      lastname: faker.name.lastName(),        

      company: faker.company.companyName(),
      address1: faker.address.streetAddress(),  

      state: faker.address.state(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),

      mobile_number: faker.phone.phoneNumber(),

      title: faker.helpers.arrayElement(['Mr', 'Mrs', 'Miss']), //RadioButton com opções pre-definidas

      //Selects individuais
      birth_date: faker.datatype.number({ min: 1, max: 28 }).toString(),
      birth_month: faker.datatype.number({ min: 1, max: 12 }).toString(),
      birth_year: faker.datatype.number({ min: 1970, max: 2005 }).toString(),
      
      //Select de paises pre-definido
      country: faker.helpers.arrayElement(['India','United States','Canada','Australia'])
    }

    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      form: true,
      body: userData
    }).as('response')
  }

  validarResponse() {
   
cy.get('@response').then((response) => {

    //Status code
    expect(response.status).to.eq(200) 

    const responseBody = JSON.parse(response.body) //Conversão de String > JSON

    //Mensagem de resposta
    expect(responseBody).to.have.property('message')
    expect(responseBody.message).to.eq('User created!')


    //Sucesso na criação
    expect(responseBody).to.have.property('responseCode')
    expect(responseBody.responseCode).to.eq(201)


    //Estrutura da resposta
    expect(responseBody).to.have.all.keys(
      'responseCode',
      'message'
    )

  })

  }
}

export default new cadastroUserApi()