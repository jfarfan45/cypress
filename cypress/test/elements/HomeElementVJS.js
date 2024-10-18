class HomeElementVJS {

	bottonLenguaje = () => cy.get('a[data-modal=".modal-language"]');
	modalLenguaje = () => cy.get(`[data-value="${Cypress.env('lenguaje')}"]`).first()
	inputDestination = () => cy.get('input[class="inp-text__input inp-text__input--secondary pickupLocation ui-autocomplete-input"]')
	tableDestination = () => cy.get('.item-autocomplete__label').first()
	inputDate = () => cy.get('input[data-modal=".datepicker-car"]').first()
	containerDatePickup = () => cy.get('.container__main')
	buttonNextDate = () =>cy.get('.button-next-month').eq(1) 
	dateInit = () => cy.get('[data-time="1741323600000"]').first();
	dateFinish = () => cy.get(`[data-time="1741928400000"]`).first();
	containerHourPickkup = () => cy.get('.inp-text--icon > input.inp-text__hour')
	buttonHourReturn = () =>cy.get('.qs-hours__col-pickup').get('button[data-value="17:00"]')
	containerHourReturn = () => cy.get('.form-qs__return-date > input.inp-text__hour')
	buttonHourReturn= () =>	cy.get('.qs-hours__col-return').get('button[data-value="11:00"]')
	ButtonSearch= () =>	cy.contains('span', /	Buscar|Search|Pesquisar/i)
	
}
module.exports = new HomeElementVJS();
