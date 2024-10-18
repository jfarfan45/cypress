class DetailElementVJS {
    Loading = () => cy.get('.backdropLoading')
	inputName = () => cy.get('#inpName')
	inputEmail = () => cy.get('#inpEmail')
	inputPhone = () => cy.get('#phoneCustom')
	baintreeNumber = () => cy.get('#braintree-hosted-field-number')
	baintreeExpiration = () => cy.get('#braintree-hosted-field-expirationDate')
	baintreeName = () => cy.get('#braintree-hosted-field-cardholderName')
	baintreeCvv = () =>	cy.get('#braintree-hosted-field-cvv')
    butonPay = () => cy.get('#payNow > .button')
}
module.exports = new DetailElementVJS();