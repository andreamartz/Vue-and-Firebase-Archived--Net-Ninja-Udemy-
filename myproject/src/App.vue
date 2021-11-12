<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      title: 'My first Vue app, wooo :)',
    };
  },
  methods: {},
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
