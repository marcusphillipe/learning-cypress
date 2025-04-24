class PersonalDetailsPage {
    selectorsList() {
        const selectors = {
            myInfoPage: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            generalField: ".oxd-input",
            datesFields: "[placeholder='yyyy-dd-mm']",
            closeDataField: ".--close",
            genericComboBox: '.oxd-select-text--arrow',
            secondItemComboBox: '.oxd-select-dropdown > :nth-child(2)',
            thirdItemComboBox: '.oxd-select-dropdown > :nth-child(3)',
            saveButton: "[type='submit']",
        }

        return selectors
    }

    accessPersonalDetailsPage() {
        cy.get(this.selectorsList().myInfoPage).click()
    }

    fillPersonalDetais(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().generalField).eq(4).clear().type(nickName)
    }
    
    fillEmployeeDetails(employeeId, otherId, driverLicense, driverLicenseDate) {
        cy.get(this.selectorsList().generalField).eq(5).clear().type(employeeId)
        cy.get(this.selectorsList().generalField).eq(6).clear().type(otherId)
        cy.get(this.selectorsList().generalField).eq(7).clear().type(driverLicense)
        cy.get(this.selectorsList().datesFields).eq(0).clear().type(driverLicenseDate)
        cy.get(this.selectorsList().closeDataField).click()
    }
    
    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true })
        cy.get(this.selectorsList().thirdItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true })
        cy.get(this.selectorsList().secondItemComboBox).click()
    }

    saveForm() {
        cy.get(this.selectorsList().saveButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default PersonalDetailsPage