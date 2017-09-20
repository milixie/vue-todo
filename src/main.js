// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App.vue'

const routes = {
  '/': 'App',
  '/city': 'City'
};


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] ? require(`./${routes[this.currentRoute]}.vue`) : require('./App.vue');
    }
  },
  render(h) {
    return h(this.ViewComponent)
  },
  // components: {App}
});
