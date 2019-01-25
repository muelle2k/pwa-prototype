import Vue from 'vue'
import App from './App.vue'
import VueWorker from 'vue-worker';
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueWorker);

new Vue({
  render: h => h(App),
}).$mount('#app')

// workbox.setConfig({
//   debug: false,
// });

// workbox.precaching.precacheAndRoute([]);

// workbox.routing.registerRoute(
//   /\.(?:js|css)$/,
//   workbox.strategies.staleWhileRevalidate(),
// );

// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg)$/,
//   workbox.strategies.cacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   }),
// );