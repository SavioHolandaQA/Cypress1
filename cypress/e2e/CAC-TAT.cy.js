
describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(() => {
  cy.visit('./src/index.html')
})

  it('verifica o título da aplicação', function() {
cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
})

it('preencher os campos obrigatórios e enviar o formulario', () =>{
  cy.get('#firstName').type('CR7')
  cy.get('#lastName').type('Savio QA')
  cy.get('#email').type('savioteste@gmail.com')
  cy.get('#open-text-area').type('Oi, QAs!')
  cy.contains('button', 'Enviar').click()

  cy.get('.success').should('be.visible')


})
it('valida mensagem de erro, quando o e-mail estiver errado, coloquei uma (,) no lugar do (.) ', () =>{
  cy.get('#firstName').type('CR7')
  cy.get('#lastName').type('Savio QA')
  cy.get('#email').type('savioQATest@gmai,com')
  cy.get('#open-text-area').type('Oi, QAs')
  cy.get('button[type="submit"]').click()

cy.get('.error').should('be.visible')

})

it('preencher e limpar campos e validar que foi preenchido e limpo',() =>{

  cy.get('#firstName')
  .type('SavioQA')
  .should('have.value', 'SavioQA')
  .clear()
  .should('have.value', '')
  
  })
  it('envia o formuário com sucesso usando um comando customizado', () => {
     cy.fillMandatoryFieldsAndSubmit()
     
     cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => { 
  cy.get('#product') 
  .select('YouTube') 
  .should('have.value', 'youtube')
  })

  it('marca o tipo de atendimento "Feedback"', () => { 
  cy.get('input[type="radio"][value="feedback"]') 
  .check() 
  .should('be.checked')
})

it('Marca cada tipo de atendimento', () => { 
  cy.get('input[type="radio"]') 
    .each((radioButton) => { 
      cy.wrap(radioButton)  
        .check() 
        .should('be.checked'); 
    });
  })

    it('marca ambos os checkboxes, depois desmarca o último', () => { 
 
      cy.get('input[type="checkbox"]') 
        .check() 
        .should('be.checked')  
        .last() 
        .uncheck() 
        .should('not.be.checked') 
    })

    it('seleciona um arquivo da pasta fixtures, resumindo validar um campo de anexo', () => { 
      cy.get('#file-upload') 
        .selectFile('cypress\\fixtures\\example.json') 
        
    })

    it('seleciona um arquivo da pasta fixtures', () => {
      cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json') 
      .should (input => {
      expect(input[0].files[0].name).to.equal('example.json')

  })
})
    
    it('seleciona um arquivo simutando um drag-and-drop', () => {
      cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
      .should(input => {
      expect(input[0].files[0].name).to.equal('example.json')

    })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',() => {
  cy.fixture('example.json').as('sampleFile')
  cy.get('#file-upload')
  .selectFile('@sampleFile')
  .should(input => {
  expect(input[0].files[0].name).to.equal('example.json')
})
})

it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
  cy.contains('a', 'Política de Privacidade')
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target', '_blank');
});

it('Acessar a página de política de privacidade removendo o target e então clicando no link', () => {
  cy.contains('a', 'Política de Privacidade')
    .invoke('removeAttr', 'target')
    .click()

  cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible');
});

})
