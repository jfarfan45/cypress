// Desactivar la limpieza automática de cookies entre pruebas


describe("Tipos de Localizadores en Viajemos.com", () => {

  // Cargar la página antes de cada prueba
  beforeEach(() => {
    cy.visit('https://www.viajemos.com', { timeout: 120000 });
    
    });

  it("Verifica elementos en la página de Viajemos.com", () => {
    cy.title().should('include', 'Viajemos');
  });

  it("Obtener por medio de un objeto", () => {
    cy.get('input');
  });

  it("Obtener por medio de un atributo", () => {
    cy.get('[data-link="pickupLocation"]');
  });

  it("Obtener por medio de un ID", () => {
    cy.get('.d-lg-grid > .button-currency-header');
  });

});
