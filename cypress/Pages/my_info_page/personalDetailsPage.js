class PersonalDetailsPage {
    selectorsList() {
        const selectors = {
            myInfoPage: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            generalField: ".oxd-input",
            datesFields: "[placeholder='yyyy-dd-mm']",
            closeDataField: ".--close",
            generalSelectField: ".oxd-select-text-input",
            saveButton: "[type='submit']",
        }

        return selectors
    }

    accessPersonalDetailsPage() {
        cy.get(this.selectorsList().myInfoPage).click()
    }

    changePersonalInfo() {
        cy.get(this.selectorsList().firstNameField).clear().type("First Name Test")
        cy.get(this.selectorsList().lastNameField).clear().type("Last Name Test")
        cy.get(this.selectorsList().generalField).eq(4).clear().type("Nickname Test")
        cy.get(this.selectorsList().generalField).eq(5).clear().type("Employee")
        cy.get(this.selectorsList().generalField).eq(6).clear().type("OtherId")
        cy.get(this.selectorsList().generalField).eq(7).clear().type("Driver License Number Test")
        cy.get(this.selectorsList().datesFields).eq(0).clear().type("2025-15-10")
        cy.get(this.selectorsList().closeDataField).click()
        cy.get(this.selectorsList().generalSelectField).eq(0).type("j").click()
        cy.get(this.selectorsList().generalSelectField).eq(1).type("o").click()
        cy.get(this.selectorsList().saveButton).eq(0).click
    }
}

export default PersonalDetailsPage