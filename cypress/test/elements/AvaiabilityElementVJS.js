class AvaiabilityElementVJS {
    CarRentalFilter= () => cy.get('img[alt="Avis"]')
	ButtonApply= () => cy.contains ('span', /apply|aplicar|aplicar/i)
	ButonReservate= () => cy.get('a.card-rate__link')
    ButonMoreRental= () => cy.get(':nth-child(7) > .p-none > .button > .button__label')

}
module.exports = new AvaiabilityElementVJS();