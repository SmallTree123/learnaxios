<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    alert("Home Create");
  },
  destroyed() {
    alert("Home Destoryed");
  }

}
</script>
<style>

</style>
