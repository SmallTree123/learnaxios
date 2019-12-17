<template>
  <div>
    <h1>This is an User page</h1>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId(){
        return this.$route.params.userId

      }
    }
  }
</script>

<style>

</style>