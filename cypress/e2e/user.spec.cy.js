import userData from "../fixtures/users/userData"
import LoginPage from "../Pages/loginPage"
import DashboardPage from "../Pages/dashboardPage"
import PersonalDetailsPage from "../Pages/My_Info_Page/personalDetailsPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const personalDetailsPage = new PersonalDetailsPage()

describe('Orange HRM Test', () => {

  const selectorsList = {

  }

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.confirmDashboardPage()
    personalDetailsPage.accessPersonalDetailsPage()
    personalDetailsPage.changePersonalInfo()
  })

  //it.skip('Login - Fail', () => {
  //  cy.visit('/auth/login')
  //  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  //  cy.get(selectorsList.passwordField).type(userData.userFail.password)
  //  cy.get(selectorsList.loginButton).click()
  //  cy.get(selectorsList.wrongCredentialAlert)
  //})
})