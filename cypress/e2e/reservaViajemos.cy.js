describe('Visitar Viajemos.com', () => {
    it('Debería entrar en la página principal', () => {
      // Visita la página principal de viajemos.com
      cy.visit('https://www.viajemos.com');
  
      // Verifica que el título de la página contenga "Viajemos"
      cy.title().should('include', 'Viajemos');
      
      // Opcional: puedes agregar más pruebas aquí, como verificar elementos de la página
    });
  });