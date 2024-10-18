describe('Navegación', ()=>{
    it("Navegar A Nuestra Página", ()=>{
        cy.visit('https://www.viajemos.com')
    }),
    it("recargar", ()=>{
        cy.reload()
    }),
    it("recarga forzada", ()=>{
        cy.visit('https://www.viajemos.com')
        cy.reload(true)
    })
    it.only("navegar hacia atras y adelante", ()=>{
        cy.visit('https://www.viajemos.com')
        cy.visit('https://www.viajemos.com/car/index/search/searchkey/ZW5lcmdpemVlLTE3MjM2OTAxNjQuODU3Ni0yMTQy/pickup_location_code/MIAT15/return_location_code/MIAT15/pickup_date/08-15-2024/pickup_time/12%3A00/return_date/08-19-2024/return_time/12%3A00/vehicle_type_id/0/total_days/4/country_destination/US')
        //**ATRAS** cy.go('back') o cy.go(-1)
        cy.go(-1)
        /**ADELANTE** cy.go('foward') o cy.go(1) */
        cy.go('forward')
    
    })
    it("navegar hacia atras", ()=>{
        cy.visit('https://www.viajemos.com')
        cy.visit('https://www.viajemos.com/car/index/search/searchkey/ZW5lcmdpemVlLTE3MjM2OTAxNjQuODU3Ni0yMTQy/pickup_location_code/MIAT15/return_location_code/MIAT15/pickup_date/08-15-2024/pickup_time/12%3A00/return_date/08-19-2024/return_time/12%3A00/vehicle_type_id/0/total_days/4/country_destination/US')
        //cy.go('foward')
        cy.go(-1)

    })
})