module.exports = {
  button: {
    continueNewCustomer: {
      xpath: '//input[@id="button-account"]',
    },
    continuePersonalDetails: {
      xpath: '//input[@id="button-guest"]',
    },
    continueDeliveryMethod: {
      xpath: '//input[@id="button-shipping-method"]',
    },
    continuePaymentMethod: {
      xpath: '//input[@id="button-payment-method"]',
    },
    confirmOrder: {
      xpath: '//input[@id="button-confirm"]',
    },
  },
  checkbox: {
    guest: {
      xpath: '//label[contains(., "Guest Checkout")]',
    },
    paymentTermsConditions: {
      xpath: '//input[@name="agree"]',
    },
  },
  textField: {
    firstname: {
      xpath: '//input[@name="firstname"]',
    },
    lastname: {
      xpath: '//input[@name="lastname"]',
    },
    email: {
      xpath: '//input[@id="input-payment-email"]',
    },
    telephone: {
      xpath: '//input[@name="telephone"]',
    },
    address1: {
      xpath: '//input[@name="address_1"]',
    },
    address2: {
      xpath: '//input[@name="address_2"]',
    },
    city: {
      xpath: '//input[@name="city"]',
    },
    postcode: {
      xpath: '//input[@name="postcode"]',
    },
  },
  list: {
    region: {
      xpath: '//select[@name="zone_id"]',
    },
  },
  option: {
    firstOption: {
      xpath: '//option[@value="3513"]',
    },
  },
  url: {
    checkoutPage: "/index.php?route=checkout/checkout",
  },
};
