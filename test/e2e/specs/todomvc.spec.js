module.exports = {
  應用程式標題與輸入欄位(browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.header')
      .assert.containsText('h1', 'todos')
      .assert.elementPresent('.new-todo')
      .end();
  },

  輸入欄位應該在輸入待辦事項後清空(browser) {
    const todo = 'This is new todo';

    browser
      .url('http://localhost:8080')
      .setValue('.new-todo', [todo, browser.Keys.ENTER])
      .assert.value('.new-todo', '')
      .end();
  },
};
