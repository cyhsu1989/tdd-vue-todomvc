module.exports = function (browser) {
  this.show = () => browser
    .url('http://localhost:8080')
    .waitForElementVisible('#app', 5000);
};
