module.exports = function (browser) {
  const newTodo = '.new-todo';
  const firstTodoItem = '.todo-list li:first-child';

  this.show = () => browser
    .url('http://localhost:8080')
    .waitForElementVisible('#app', 5000);

  this.shouldSeeTitleAndInput = () => browser
    .assert.elementPresent('.header')
    .assert.containsText('h1', 'todos')
    .assert.elementPresent(newTodo);

  this.addTodo = todo => browser
    .setValue(newTodo, [todo, browser.Keys.ENTER]);

  this.shouldSeeAtNewTodo = value => browser
    .assert.value(newTodo, value);

  this.shouldSeeAtFirstItem = todo => browser
    .waitForElementVisible(firstTodoItem, 1000)
    .assert.containsText(`${firstTodoItem} > .view > label`, todo);

  this.shouldHiddenTodoListWithoutTodo = () => browser
    .assert.hidden('.main', 1000);
};
