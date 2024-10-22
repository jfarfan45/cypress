import ElementViajemos from "../elements/ElementVJS"
class logicVJS {
	
    visitVJS  = () =>  cy.visit('https://www.viajemos.com').clearCookies().clearLocalStorage()
    clickLenguaje = () => ElementViajemos.bottonLenguaje().first().should('be.visible').click({force: true});
    clickLenguajeModal = () => ElementViajemos.modalLenguaje().click();
    typeDestination = () => ElementViajemos.inputDestination().type("toronto").wait(3000);
    clickDestination = () => ElementViajemos.tableDestination().click();
    selectDate = () => ElementViajemos.inputDate().click();
    selectDateDate =() => function avanzarHastaEncontrarFecha(timestamp){ElementViajemos.containerDatePickup().then(($body) => {
        if ($body.find(`[data-time="${timestamp}"]`).length === 0) {
        cy.wait(500);
        ElementViajemos.buttonNextDate().click({ force: true });
        cy.wait(250);
        avanzarHastaEncontrarFecha(timestamp);}});
    }
    dateInit = () => ElementViajemos.dateInit().trigger('click');
    dateFinish = () =>ElementViajemos.dateFinish().click();
    selectHour = () =>ElementViajemos.containerHourPickkup().first().click( {force: true});
    hour = () => ElementViajemos.buttonHourReturn().first().click();
    search = () => ElementViajemos.ButtonSearch().first().click().wait(15000).should('not.exist');

    allRental = () => ElementViajemos.ButonMoreRental()
    .then(($el) => {
      if ($el.length) {
        cy.wrap($el).click();
      } else {
        cy.log('elemento no encontrado, continuando...');
      }
    });
    filterCarRental = () => ElementViajemos.CarRentalFilter().first().click().wait(500);
    apply = () => ElementViajemos.ButtonApply().first().click().wait(500);
    reservate = () => ElementViajemos.ButonReservate().first().click();

    wait = () => ElementViajemos.loading.should('not.exist');
    filterRentCar = () => ElementViajemos.carRentalFilter().click().wait(500); 
    aplyFilter = () => ElementViajemos.buttonAply().click(0);
    

}
module.exports = new logicVJS();
