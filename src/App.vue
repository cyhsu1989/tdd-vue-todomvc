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
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      this.newTodo = '';
    },
  },
};
</script>

<style src="todomvc-app-css/index.css"></style>
