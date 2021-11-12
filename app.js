new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja',
    showName: true,
  },
  methods: {
    logMessage() {
      console.log('Hello, World');
    },
    toggleName() {
      this.showName = !this.showName;
    },
  },
});
