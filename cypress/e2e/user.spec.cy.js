import userData from "../fixtures/users/userData"
import LoginPage from "../Pages/loginPage"
import DashboardPage from "../Pages/dashboardPage"
import PersonalDetailsPage from "../Pages/My_Info_Page/personalDetailsPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const personalDetailsPage = new PersonalDetailsPage()

describe('Orange HRM Test', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithCorrectUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.confirmDashboardPage()

    personalDetailsPage.accessPersonalDetailsPage()
    personalDetailsPage.fillPersonalDetais('First Name', 'Last Name', 'Nickname')
    personalDetailsPage.fillEmployeeDetails('EmployID', 'OtherID', 'Drivers Number', '2025-10-15')
    personalDetailsPage.fillStatus()
    personalDetailsPage.saveForm()
  }) 
})