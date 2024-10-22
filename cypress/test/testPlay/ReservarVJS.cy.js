
import logicVJS from "../logic/logicVJS";


describe('Navegación', ()=>{
    it('Homme', ()=>{
        logicVJS.visitVJS();
        logicVJS.clickLenguaje();
        logicVJS.clickLenguajeModal();
        logicVJS.typeDestination();
        logicVJS.clickDestination();
        logicVJS.selectDate();
        const avanzarHastaEncontrarFecha = logicVJS.selectDateDate();
        avanzarHastaEncontrarFecha("1741323600000");
        logicVJS.dateInit();
        avanzarHastaEncontrarFecha("1741928400000");
        logicVJS.dateFinish();
        logicVJS.selectHour();
        logicVJS.hour();
        logicVJS.search();
    })
    it('detail', ()=>{
        logicVJS.allRental();
        logicVJS.filterCarRental();
         
    })

})