module.exports = function (browser) {
  this.show = () => browser
    .url('http://localhost:8080')
    .waitForElementVisible('#app', 5000);

  this.shouldSeeTitleAndInput = () => browser
    .assert.elementPresent('.header')
    .assert.containsText('h1', 'todos')
    .assert.elementPresent('.new-todo');

  this.addTodo = todo => browser
    .setValue('.new-todo', [todo, browser.Keys.ENTER]);

  this.shouldSeeAtNewTodo = value => browser
    .assert.value('.new-todo', value);

  this.shouldSeeAtFirstItem = todo => browser
    .waitForElementVisible('.todo-list li:first-child', 1000)
    .assert.containsText('.todo-list li:first-child > .view > label', todo);

  this.shouldHiddenTodoListWithoutTodo = () => browser
    .assert.hidden('.main', 1000);
};
