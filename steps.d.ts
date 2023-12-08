/// <reference types='codeceptjs' />
type steps_file = typeof import("./steps_file.js");
type mainPageLocators = typeof import("./pages/mainPage/locators.js");
type cartPageLocators = typeof import("./pages/cartPage/locators.js");
type checkoutPageLocators = typeof import("./pages/checkoutPage/locators.js");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    mainPageLocators: mainPageLocators;
    cartPageLocators: cartPageLocators;
    checkoutPageLocators: checkoutPageLocators;
  }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
