# Desafio-Automation_Exercise – UI + API
Projeto de automação de testes desenvolvido com Cypress, cobrindo cenários de UI (Web) e API para um e-commerce.

📌 Objetivo
Automatizar testes de um e-commerce, cobrindo UI e API, aplicando boas práticas de automação, organização e geração de dados dinâmicos.
👉 Sistema: https://www.automationexercise.com


## 🧰 Tecnologias
- Cypress  
- Cucumber (BDD)  
- Faker – Gerador de dados dinâmicos  
- JavaScript  

---

## ✅ Cenário 1 – UI (Web)

### 🔁 Fluxo automatizado
- Cadastro de usuário  
- Busca do produto **“Men Tshirt”**  
- Captura de nome e valor  
- Adição ao carrinho  

### ✅ Validações
- Mensagem de sucesso  
- Nome do produto  
- Valor consistente  

---

## ✅ Cenário 2 – API

### 📡 Endpoint

### ✅ Validações
- Status HTTP: `200`  
- responseCode: `201`  
- Mensagem: `"User created!"`  
- Estrutura da resposta  

---

## 🔄 Dados Dinâmicos com Faker

O Faker é uma biblioteca JavaScript utilizada para gerar dados fictícios realistas, como nomes, e-mails, endereços e telefones. Esses dados simulam informações reais utilizadas em sistemas.

### ✅ Vantagens
- Geração de dados dinâmicos → evita uso de dados fixos nos testes  
- Evita duplicidade → garante e-mails e usuários únicos  
- Maior cobertura de testes → simula diferentes cenários e entradas  
- Mais realismo → dados próximos do mundo real melhoram a qualidade dos testes  
- Economia de tempo → elimina a criação manual de massa de dados  

---

## 🧱 Estrutura do Projeto


cypress/
├── e2e/
│    ├── backend/      # Testes de API
│    ├── frontend/     # Testes de UI
│
├── fixtures/
├── plugins/
│
├── support/
│    ├── pages/              # Page Object Model (POM)
│    ├── step-definitions/   # Steps do Cucumber (BDD)
│    ├── commands.js         # Custom commands
│    ├── e2e.js              # Configuração global
│
cypress.config.js
package.json

---

## 🔐 Boas práticas
- Page Object Model (POM)  
- Separação UI / API  
- Dados sensíveis no `cypress.env`  
- Requisições reutilizáveis  

---

## ▶️ Execução do Projeto

📦 Instalar dependências
- npm install
- npx cypress open - Modo Interativo
- npx cypress run - Modo Headless


📸 Evidências

UI - WEB

<img width="1902" height="963" alt="image" src="https://github.com/user-attachments/assets/d2d91a28-987c-4605-bd6f-4995ba764925" />

API - 

<img width="1907" height="974" alt="image" src="https://github.com/user-attachments/assets/b97cf532-0afb-4b48-b65d-0aeb17886d19" />


👩‍💻 Autora
Beatriz França Amaya - QA Automation Engineer
