let { I } = inject();
module.exports = {
  button: {
    macbookAddToCart: {xpath: '//*[@id="content"]/div[2]/div[1]/div[1]/div[3]/button[1]'},
    iphoneAddToCart: {xpath: '//*[@id="content"]/div[2]/div[2]/div[1]/div[3]/button[1]'},
    cartMenu: {xpath: '//*[@id="cart"]/button[1]'}
  },
  text: {
    title: 'Your Store'
  },
  link: {
    viewCart: {xpath: '//*[@id="cart"]/ul[1]/li[2]/div[1]/p[1]/a[1]/strong[1]'}
  },
  url:{
    mainPage: 'http://opencart.abstracta.us/'
  }
};
