

describe('Team Builder Test', () => {
    
    const nameInput = () => cy.get('input[name="name"]')


    it('can navigate to http://localhost:3000', () => {
            cy.visit('http://localhost:3000')
            cy.url().should('include', 'localhost')
        })

    describe("Inputs Test", () => {
        it('can get name input', () => {
            cy.get("input[name='name']")
            .type("AJ")
            .should("have.value", "AJ")
        })
        it('can get email input', () => {
            cy.get("input[name='email']")
            .type("ajgebara@gmail.com")
            .should("have.value", "ajgebara@gmail.com")
        })
        it('can get password input', () => {
            // cy.get("input[name='password']")
            // .type("charmeleon777_7")
            // .should("have.value", "ajgebara@gmail.com")
        })
    describe("Terms of Service Test", () => {
        it('can click on terms of service', () => {
            cy.get("#terms-of-service")
            .check()
            .should("be.checked")
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