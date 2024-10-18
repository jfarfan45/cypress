import HomeElementVJS from "../elements/HomeElementVJS";

class homeLogicVJS {
	
    visitVJS  = () =>  cy.visit('https://www.viajemos.com').clearCookies().clearLocalStorage()
    clickLenguaje = () => HomeElementVJS.bottonLenguaje().first().should('be.visible').click({force: true});
    clickLenguajeModal = () => HomeElementVJS.modalLenguaje().click();
    typeDestination = () => HomeElementVJS.inputDestination().type("toronto").wait(3000);
    clickDestination = () => HomeElementVJS.tableDestination().click();
    selectDate = () => HomeElementVJS.inputDate().click();
    selectDateDate =() => function avanzarHastaEncontrarFecha(timestamp){HomeElementVJS.containerDatePickup().then(($body) => {
        if ($body.find(`[data-time="${timestamp}"]`).length === 0) {
        cy.wait(500);
        HomeElementVJS.buttonNextDate().click({ force: true });
        cy.wait(250);
        avanzarHastaEncontrarFecha(timestamp);}});
    }
    dateInit = () => HomeElementVJS.dateInit().trigger('click');
    dateFinish = () =>HomeElementVJS.dateFinish().click();
    selectHour = () =>HomeElementVJS.containerHourPickkup().first().click( {force: true});
    Hour = () => HomeElementVJS.buttonHourReturn().first().click();
    
    

}
module.exports = new homeLogicVJS();
