'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import App from './App.vue'

var routes = {
  '/': 'App',
  '/city': 'City',
  '/load': 'Load'
};

/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
new _vue2.default({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent: function ViewComponent() {
      return routes[this.currentRoute] ? require('./' + routes[this.currentRoute] + '.vue') : require('./App.vue');
    }
  },
  render: function render(h) {
    return h(this.ViewComponent);
  }
});
//# sourceMappingURL=main.js.map