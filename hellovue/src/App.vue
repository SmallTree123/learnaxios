<template>
  <div id="app">
      <h2>我是App组件</h2>
      <h2>{{$store.state.counter}}</h2>
    <button @click="addtion">+</button>
    <button @click="subtion">-</button>
    <hr>
    <ul>
     <li v-for="item in stu">{{item.id}}--{{item.name}}--{{item.age}}</li>
    </ul>
    <hr>
    <h2>{{$store.state.info.id}}---{{$store.state.info.name}}---{{$store.state.info.address}}</h2>
    <button @click="updateInfo">修改信息</button>
  </div>
</template>
<script>
  export default {
    name: "App",
    computed: {
      stu(){
        return this.$store.state.student.filter(s => {
           return s.age>20;
        })
      }
    },
    methods: {
      //commit提交到的是mutations
      addtion(){
        this.$store.commit("increment");
      },
      subtion(){
        this.$store.commit("drement");
      },
      // updateInfo(){
      //   this.$store.dispatch("aUpdateInfo",{
      //     message: "我是携带的信息",
      //     success: () => {
      //       alert("修改名称成功");
      //     }
      //   });
      // }
      updateInfo(){
        this.$store.dispatch("aUpdateInfo","message：today is a fine Day").then(res => {
          alert(res);
        })
      }
    }
  }
</script>
<style>

</style>
