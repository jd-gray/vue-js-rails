<template>
  <div id="app">
    <label for="title">Title:</label>
    <input v-model="title" placeholder="Title">

    <label for="content">Content:</label>
    <input v-model="content" placeholder="Content">

    <button v-on:click="submit">Submit</button>

    <ol>
      <li v-for="todo in todos">
        <b>Title:</b> {{ todo.title }}
        <b>Content:</b> {{ todo.content }}
      </li>
    </ol>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import App from './app.vue'

  Vue.use(VueResource);

  export default {
    data: {
      title: '',
      content: '',
      todos: gon.todos
    },
    methods: {
      submit: function () {
        this.$http.post('/todos', { title: this.title, content: this.content }).then(response => {
          this.todos.unshift(response.body);
        });
        this.title = '';
        this.content = '';
      }
    }
  }
</script>

<style scoped>
</style>
