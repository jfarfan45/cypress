
describe('Visitar Viajemos.com', () => {
  before(() => {
    // Visita la página principal de viajemos.com antes de cada test
    cy.visit('https://viajemostest.viajemosdev.info/').reload(true)
  });
  it('Entrar en la página principal', () => {
    // Verifica que el título de la página contenga "Viajemos"
    cy.title().should('include', 'Viajemos')
  });
  it('Escoger el idioma', () => {
    //**IDIOMA**/
    cy.get('a[data-modal=".modal-language"]').eq(0).click();
    //seleccionar idioma "es","en","pt"
    cy.get('.modal-language > .modal__dialog > .modal__content > .modal__body').find('[href="/es/"]').click();
  });
  it('Escoger  destino ', () => {
    //introducir destino
    cy.get('input[class="inp-text__input inp-text__input--secondary pickupLocation ui-autocomplete-input"]').type("los angeles").wait(1000)
    cy.get('.item-autocomplete__label').eq(0).click();

  });
  it('Escoger fecha', () => {  
    //introducir fecha
    cy.get('input[data-modal=".datepicker-car"]').eq(0).click();
    function avanzarHastaEncontrarFecha(timestamp) {
      cy.get('.container__main').then(($body) => {
        // Verificar si la fecha existe en el calendario
        if ($body.find(`[data-time="${timestamp}"]`).length === 0) {
          // Si no encuentra la fecha, hacer clic en el botón para avanzar de mes
          cy.wait(500).get('.button-next-month').eq(1).click({ force: true });
          
          // Esperar un poco para que se carguen los nuevos meses y volver a verificar
          cy.wait(250);
          
          // Llamar recursivamente a la función hasta que encuentre la fecha
          avanzarHastaEncontrarFecha(timestamp);
        }
      });
    }
    // Avanzar hasta encontrar la fecha inicial (ejemplo: 1741323600000)
    avanzarHastaEncontrarFecha("1741323600000");
    // Seleccionar la fecha inicial
    cy.get('[data-time="1741323600000"]').first().trigger('click');
    // Avanzar hasta encontrar la fecha final (ejemplo: 1741928400000)
    avanzarHastaEncontrarFecha("1741928400000");
    // Seleccionar la fecha final
    cy.get(`[data-time="1741928400000"]`).first().click();

  });
  it('Escoger Hora', () =>{
    cy.get('.inp-text--icon > input.inp-text__hour').eq(0).click( {force: true});
    cy.get('.qs-hours__col-pickup').get('button[data-value="17:00"]').eq(0).click();
    cy.get('.form-qs__return-date > input.inp-text__hour').eq(0).click( {force: true});
    cy.get('.qs-hours__col-return').get('button[data-value="11:00"]').eq(1).click();
  });
  it('Escoger Auto', () => {
    // Buscar agencia
    cy.contains('span', /Buscar|Search|Pesquisar/i).click().wait(15000).should('not.exist');

    cy.get(':nth-child(7) > .p-none > .button > .button__label', { timeout: 0 }).should('exist')
    .then(($el) => {
      if ($el.length) {
        // Haz algo con el elemento
        cy.wrap($el).click();
      } else {
        // Si no existe, sigue con el siguiente paso
        cy.log('Elemento no encontrado, continuando...');
      }
    });

    
    
  });
  it('pago', () =>{
    cy.get('img[alt="Sixt"]').eq(0).click().wait(500);
    cy.get('#buttonApplyFilter > :nth-child(2) > .button').eq(0).click();

    cy.get('a.card-rate__link').eq(0)
    .should('have.attr', 'href')
    .and('include', '/detail')
    .then((href) =>{
      const fullUrl = 'https://www.viajemos.com' + href;
      cy.visit(fullUrl).reload(true).wait(500);
    });
    cy.get('.backdropLoading').wait(15000).should('not.exist')
    cy.get('#inpName').type('jahir test')
    cy.get('#inpEmail').type('viajemoscalidad@gmail.com')
    cy.get('#phoneCustom').type('3215697420').wait(500)
    
    
    cy.get('#braintree-hosted-field-number').then($iframe=>{
      const $body = cy.wrap($iframe.contents().find('body'))
      $body.find('#credit-card-number').type('4111111111111111')
    })
    cy.get('#braintree-hosted-field-expirationDate').then($iframe=>{
        const $body = cy.wrap($iframe.contents().find('body'))
        $body.find('#expiration').type('102030')
    })
    cy.get('#braintree-hosted-field-cardholderName').then($iframe=>{
        const $body = cy.wrap($iframe.contents().find('body'))
        $body.find('[name="cardholder-name"]').type('Jahir F')
    })
    cy.get('#braintree-hosted-field-cvv').then($iframe=>{
        const $body = cy.wrap($iframe.contents().find('body'))
        $body.find('#cvv').type('852')
    })

    cy.get('#payNow > .button').click()
    cy.clearAllLocalStorage();

  });



    
  
  
  

    
    
    //cy.get('[data-time="1741928400000"]').first().click({ force: true });
    //oli

    //click en BUSCAR
    //cy.get('[id*="btnQS"]').first().click();

    
  
    


    /**MONEDA**/
    //cy.get('a[data-modal=".modal-language"]').eq(0).click();
    


    // Opcional: puedes agregar más pruebas aquí, como verificar elementos de la página
  
});