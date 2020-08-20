describe('Team Builder Test', () => {
    
    const nameInput = () => cy.get('input[name="name"]')

    beforeEach(() => {

    })

    describe("Inputs Test", () => {
        it('can navigate to http://localhost:1234', () => {
            cy.visit('http://localhost:3000')
            cy.url().should('include', 'localhost')
        })
        it('can get name input', () => {
            cy.get(".name").should("have.value")
        })
        it('can get email input', () => {

        })
        it('can get password input', () => {

        })
    describe("Terms of Service Test", () => {
        it('can click on terms of service', () => {

        })
    describe("Data Submission Test", () => {
        it("user can submit data", () => {

        })
    })
    describe("Form Validation Test", () => {
        it("form validation if input is left empty", () => {
            
        })
    })
    })
    })
})