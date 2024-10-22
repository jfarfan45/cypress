class ElementViajemos {

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
	
	ButtonApply= () => cy.contains ('span', /apply|aplicar|aplicar/i)
    ButonMoreRental= () => cy.get(':nth-child(7) > .p-none > .button > .button__label', { timeout: 0 }).should('exist')

	carRentalFilter= () => cy.get('img[alt="Avis"]');
	buttonAply = () => ('#buttonApplyFilter > :nth-child(2) > .button').eq(0);
	butonReservate= () => cy.get('a.card-rate__link');
    loading = () => cy.get('.backdropLoading');
	inputName = () => cy.get('#inpName');
	inputEmail = () => cy.get('#inpEmail');
	inputPhone = () => cy.get('#phoneCustom');
	baintreeNumber = () => cy.get('#braintree-hosted-field-number');
	baintreeExpiration = () => cy.get('#braintree-hosted-field-expirationDate');
	baintreeName = () => cy.get('#braintree-hosted-field-cardholderName');
	baintreeCvv = () =>	cy.get('#braintree-hosted-field-cvv');
    butonPay = () => cy.get('#payNow > .button');
}
module.exports = new ElementViajemos();
