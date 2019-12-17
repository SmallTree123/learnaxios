<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import About from "./components/About";
// import Home from "./components/Home";

export default {
  name: 'app',
  components: {
    // About,
    // Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
