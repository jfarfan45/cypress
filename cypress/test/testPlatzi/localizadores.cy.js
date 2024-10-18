describe('tipos de localizadores', () => {
    // Captura excepciones no detectadas
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Puedes loguear el error si lo deseas
        console.error(err);
        // Evitar que Cypress falle en este error
        return false;
    });

    it('por medio de un Tag', () => {
        cy.visit('/automation-practice-form');
        cy.get('input');
    });
    it('por medio de un atributo', ()=>{
        //cy.visit('/automation-practice-form');
        cy.get('[placeholder="First Name"]')
    })
});