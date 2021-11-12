<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <AllFriends />
    <OnlineFriends />
  </div>
</template>

<script>
import Navbar from './Navbar';
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';

export default {
  name: 'App',
  components: {
    Navbar,
    AllFriends,
    OnlineFriends,
  },
  data() {
    return {
      title: 'My first Vue app, wooo :)',
    };
  },
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
