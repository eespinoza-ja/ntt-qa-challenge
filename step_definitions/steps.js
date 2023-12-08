const { I, mainPageLocators, cartPageLocators, checkoutPageLocators } = inject();
const timeout = 30;
const firstname = "Jane";
const lastname = "Doe";
const email = "janedoe@opencart.com";
const telephone = "+23123456789";
const address1 = "First Street";
const address2 = "Second Street";
const city = "New York";
const postcode = "010001";

// Scenario: Purchase Test

Given("I go to the web page", async () => {
  await I.amOnPage(mainPageLocators.url.mainPage);
});

Given("I see the title page", async () => {
  await I.waitForText(mainPageLocators.text.title, timeout);
});

When("I add two productos to the cart", async () => {
  await I.click(mainPageLocators.button.macbookAddToCart);
  await I.click(mainPageLocators.button.iphoneAddToCart);
});

When("I go to cart page", async () => {
  await I.waitForClickable(mainPageLocators.button.cartMenu, timeout);
  await I.click(mainPageLocators.button.cartMenu);
  await I.waitForClickable(mainPageLocators.link.viewCart, timeout);
  await I.click(mainPageLocators.link.viewCart);
  await I.waitInUrl(cartPageLocators.url.cartPage, timeout);
});

When("I complete the checkout", async () => {
  await I.waitForClickable(cartPageLocators.link.checkout, timeout);
  await I.click(cartPageLocators.link.checkout);
  await I.waitInUrl(checkoutPageLocators.url.checkoutPage, timeout);
  await I.waitForElement(checkoutPageLocators.checkbox.guest, timeout);
  await I.click(checkoutPageLocators.checkbox.guest);
  await I.click(checkoutPageLocators.button.continueNewCustomer);
  await I.waitForVisible(checkoutPageLocators.textField.firstname, timeout);
  await I.fillField(checkoutPageLocators.textField.firstname, firstname);
  await I.fillField(checkoutPageLocators.textField.lastname, lastname);
  await I.fillField(checkoutPageLocators.textField.email, email);
  await I.fillField(checkoutPageLocators.textField.telephone, telephone);
  await I.fillField(checkoutPageLocators.textField.address1, address1);
  await I.fillField(checkoutPageLocators.textField.address2, address2);
  await I.fillField(checkoutPageLocators.textField.city, city);
  await I.fillField(checkoutPageLocators.textField.postcode, postcode);
  await I.fillField(checkoutPageLocators.textField.address2, address2);
  await I.click(checkoutPageLocators.list.region);
  await I.focus(checkoutPageLocators.option.firstOption);
  await I.waitForVisible(checkoutPageLocators.option.firstOption, timeout);
  await I.click(checkoutPageLocators.option.firstOption);
  await I.focus(checkoutPageLocators.button.continuePersonalDetails);
  await I.click(checkoutPageLocators.button.continuePersonalDetails);
  await I.waitForVisible(
    checkoutPageLocators.button.continueDeliveryMethod,
    timeout
  );
  await I.click(checkoutPageLocators.button.continueDeliveryMethod);
  await I.waitForVisible(
    checkoutPageLocators.checkbox.paymentTermsConditions,
    timeout
  );
  await I.click(checkoutPageLocators.checkbox.paymentTermsConditions);
  await I.click(checkoutPageLocators.button.continuePaymentMethod);
  await I.waitForEnabled(checkoutPageLocators.button.confirmOrder, timeout);
  await I.focus(checkoutPageLocators.button.confirmOrder);
  await I.forceClick(checkoutPageLocators.button.confirmOrder);
});

Then("I successfully complete the purchase", async () => {
  await I.waitForText(cartPageLocators.text.successfullMessage, timeout);
  await I.waitForVisible(cartPageLocators.link.continue, timeout);
  await I.click(cartPageLocators.link.continue);
  await I.waitInUrl(mainPageLocators.url.returnMainPage, timeout);
});
