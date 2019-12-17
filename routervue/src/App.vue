<template>
  <div id="app">
    <div id="nav">
<!--      tag属性是让该元素渲染成什么，，replace是保证网页上的后退键不起作用-->
      <router-link to="/home" tag="button" replace>Home</router-link>
      <router-link to="/about" tag="button" replace>About</router-link>
      <router-link :to="'/user/'+userId" tag="button" replace>User</router-link>
      <router-link :to="{path:'/profile',query:{name:'宿崇',password: '123456'}}" tag="button">Profile</router-link>
<!--      <button @click="btnHome">首页</button>-->
<!--      <button @click="btnAbout">关于</button>-->
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>

  </div>
</template>
<script>
  // import About from "./components/About";
  // import Home from "./components/Home";
  export default {
    name: 'app',
    data(){
      return{
        userId: "suc"
      }
    },
    components: {
      // About,
      // Home
    },
    methods: {
      btnHome(){
        // this.$router.push("/home");
        this.$router.replace("/home");
        console.log("btnHome");
      },
      btnAbout(){
        // this.$router.push("/about");
        this.$router.replace("/about");
        console.log("btnAbout");
      }
    }

  }
</script>
<style>
  .router-link-active {
    color: red;
  }
</style>
