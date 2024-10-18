describe("navegando", ()=>{
    
    it('navegar primer página', ()=>{
        cy.visit("www.platzi.com")
    })
    it('recargar', ()=>{
        cy.reload()
        
    })
    it('recarga forzada', ()=>{
        cy.visit('www.google.com')
        cy.reload(true)
    })
    it.only('navegar hacia atras', ()=>{
        cy.visit('www.google.com')
        cy.visit('https://www.google.com/search?q=platzi&oq=platzi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDzSAQk0ODU1ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8')
        cy.go('back')
        cy.go('forward')
        cy.go(-1)
        
    })

})