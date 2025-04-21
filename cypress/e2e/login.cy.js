import userData from "../fixtures/users/userData"

describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoPage: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    generalField: ".oxd-input",
    datesFields: "[placeholder='yyyy-dd-mm']",
    closeDataField: ".--close",
    generalSelectField: ".oxd-select-text-input",
    saveButton: "[type='submit']",
  }

  it('Login and My Info Data Change - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoPage).click()
    cy.get(selectorsList.firstNameField).clear().type("First Name Test")
    cy.get(selectorsList.lastNameField).clear().type("Last Name Test")
    cy.get(selectorsList.generalField).eq(4).clear().type("Nickname Test")
    cy.get(selectorsList.generalField).eq(5).clear().type("Employee")
    cy.get(selectorsList.generalField).eq(6).clear().type("OtherId")
    cy.get(selectorsList.generalField).eq(7).clear().type("Driver License Number Test")
    cy.get(selectorsList.datesFields).eq(0).clear().type("2025-15-10")
    cy.get(selectorsList.closeDataField).click()
    cy.get(selectorsList.generalSelectField).eq(0).type("j").click()
    cy.get(selectorsList.generalSelectField).eq(1).type("o").click()
    cy.get(selectorsList.saveButton).eq(0).click
  })

  //it.skip('Login - Fail', () => {
  //  cy.visit('/auth/login')
  //  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  //  cy.get(selectorsList.passwordField).type(userData.userFail.password)
  //  cy.get(selectorsList.loginButton).click()
  //  cy.get(selectorsList.wrongCredentialAlert)
  //})
})