<template>
  <div id="app">
    <label for="title">Title:</label>
    <input v-model="title" placeholder="Title">

    <label for="content">Content:</label>
    <input v-model="content" placeholder="Content">

    <button v-on:click="submit">Submit</button>
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
      content: ''
    },
    methods: {
      submit: function () {
        this.$http.post('/todos', { title: this.title, content: this.content });
        this.title = '';
        this.content = '';
      }
    }
  }
</script>

<style scoped>
</style>

<!--<ol>-->
  <!--<li v-for="compliment in compliments">-->
    <!--<b>Name:</b> {{ compliment.name }}-->
    <!--<b>Compliment:</b> {{ compliment.content }}-->
  <!--</li>-->
<!--</ol>-->
