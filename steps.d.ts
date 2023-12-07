/// <reference types='codeceptjs' />
type steps_file = typeof import("./steps_file.js");
type mainPageLocators = typeof import("./pages/mainPage/locators.js");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    mainPageLocators: mainPageLocators;
  }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
