it('pago', () => {
    cy.visit('https://www.viajemos.com/detail/ZW5lcmdpemVlLTE3MjY3NjM3NTcuMTcxOS0yNDYz/173a067b-7cfb-48ee-bb0a-c544823d103b/bBZqXwdlUzy0qY636%2Fmq92%2FL5c6ouMOpAxpPqtkl7fw%3D/1A/SX/CFAR')
    .wait(10000)
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
  
    
})