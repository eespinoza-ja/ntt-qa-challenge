module.exports = {
  link: {
    checkout: {
      xpath: '//a[text()="Checkout"]',
    },
    continue: {
      xpath: '//a[.="Continue"]',
    },
  },
  text: {
    successfullMessage: "Your order has been successfully processed!",
  },
  url: {
    cartPage: "/index.php?route=checkout/cart",
  },
};
