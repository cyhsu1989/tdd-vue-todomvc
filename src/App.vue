<template>
  <div id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
          v-model="newTodo"
          @keyup.enter="addTodo">
    </header>
    <section class="main" v-show="todos.length" v-cloak>
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id">
          <div class="view">
            <label>{{ todo.title }}</label>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      const todo = this.newTodo && this.newTodo.trim();
      if (!todo) return;
      this.todos.push({
        title: todo,
      });
      this.newTodo = '';
    },
  },
};
</script>

<style src="todomvc-app-css/index.css"></style>
