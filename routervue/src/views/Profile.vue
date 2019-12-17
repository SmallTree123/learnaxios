<template>
  <div>
    <h2>我是Profile</h2>
    <h3>{{name}}</h3>
    <h3>{{password}}</h3>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data(){
      return{
         "name": this.$route.query.name,
         "password": this.$route.query.password
      }
   },
    computed: {
      msg(){
        return this.$route.query.name+this.$route.query.password
      }
    }

  }
</script>

<style scoped>

</style>