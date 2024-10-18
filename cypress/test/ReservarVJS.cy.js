import homeLogicVJS from "../test/logic/homeLogicVJS"
describe('Navegación', ()=>{
    it('home', ()=>{
        homeLogicVJS.visitVJS();
        homeLogicVJS.clickLenguaje();
        homeLogicVJS.clickLenguajeModal();
        homeLogicVJS.typeDestination();
        homeLogicVJS.clickDestination();
        homeLogicVJS.selectDate();
        const avanzarHastaEncontrarFecha = homeLogicVJS.selectDateDate();
        avanzarHastaEncontrarFecha("1741323600000");
        homeLogicVJS.dateInit();
        avanzarHastaEncontrarFecha("1741928400000");
        homeLogicVJS.dateFinish();
        homeLogicVJS.selectHour();
        homeLogicVJS.Hour();
    })

})