import userData from "../fixtures/users/userData"
import LoginPage from "../Pages/loginPage"
import DashboardPage from "../Pages/dashboardPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('LoginOrange HRM Test', () => {
  
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithCorrectUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.confirmDashboardPage()
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithWrongUser(userData.userFail.username, userData.userFail.password)
  })

})