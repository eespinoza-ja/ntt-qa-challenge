const { I, mainPageLocators } = inject();
const timeout = 30

// Add in your custom step files

Given('I go to the web page', () => {
  I.amOnPage(mainPageLocators.url.mainPage);
});

Given('I see the title page', () => {
  I.waitForText(mainPageLocators.text.title, timeout);
})

When('I add two productos to the cart', () => {
  I.click(mainPageLocators.button.macbookAddToCart);
  I.click(mainPageLocators.button.iphoneAddToCart);
})

When('I go to cart page', () => {
  I.click(mainPageLocators.button.cartMenu);
  I.waitForElement(mainPageLocators.link.viewCart, timeout);
  I.click(mainPageLocators.link.viewCart);
  I.waitInUrl('/index.php?route=checkout/cart', timeout)
})

/*
Then('I should see the "{word}"', (seetext) => {
  I.see(seetext);
})

Then(/I should see the \"([^\\"]*)\" texts/, (seetext) => {
  I.see(seetext);
})

Then('I should see the number {int}', (seenumber) =>{
I.see(seenumber);
})

Then('I should see the Employee details', (table) => {
  for(const record in table.rows){
    if (record<1){
      continue;
    }
    const cellvalue = table.rows[record].cells;
    const id = cellvalue[0].value;
    const fname = cellvalue[1].value;
    const lname  =cellvalue[2].value;
    I.see(fname);
    I.say(lname);
    I.say(id);
  }
})
*/