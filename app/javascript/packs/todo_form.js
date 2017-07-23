import Vue from 'vue'
import App from './app.vue'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('todo_form'));
  const app = new Vue(App).$mount('todo_form');
});
