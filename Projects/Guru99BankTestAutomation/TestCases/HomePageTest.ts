import { Page } from "../Pages/BasePage/Page";
import { ILoginPage } from "../Interface/ILoginPage";
import { IHomePage } from "../Interface/IHomePage";
import { LoginPage } from "../Pages/Actions/LoginPage";
import { DATA, HomePageData } from "../TestData/Data";

let loginPage: ILoginPage = new LoginPage();
let homePage: IHomePage;

describe("Guru99Bank Home Page Test Cases Workflow", () => {
  beforeAll(async () => {
    await Page.initalization(DATA.URL);
    homePage = await loginPage.login(DATA.USER_NAME, DATA.PASSWORD);
  });

  it("Verify user should able to seen welcome message after login", async () => {
    expect(await homePage.verifyWelcomeMessage()).toBe(
      HomePageData.welcomeMessage
    );
  });

  it("Verify user should able to see the manager id from which he login", async () => {
    expect(await homePage.verifyManagerId()).toBe(HomePageData.managerId);
  });
});
