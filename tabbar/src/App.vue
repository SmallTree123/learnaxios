<template>
  <div id="app">
    <tar-bar>
       <tab-bar-item path="/home">
         <img src="./assets/img/home.svg" alt="" slot="item-icon">
         <img src="./assets/img/home-active.svg" alt="" slot="item-icon-active">
         <div slot="item-text">首页</div>
       </tab-bar-item>
       <tab-bar-item path="/category">
         <img src="./assets/img/sort.svg" alt="" slot="item-icon">
         <img src="./assets/img/sort-active.svg" alt="" slot="item-icon-active">
         <div slot="item-text">分类</div>
       </tab-bar-item>
       <tab-bar-item path="/shopcar">
         <img src="./assets/img/shopcar.svg" alt="" slot="item-icon">
         <img src="./assets/img/shopcar-active.svg" alt="" slot="item-icon-active">
         <div slot="item-text">购物车</div>
       </tab-bar-item>
       <tab-bar-item path="/user">
         <img src="./assets/img/user.svg" alt="" slot="item-icon">
         <img src="./assets/img/user-active.svg" alt="" slot="item-icon-active">
         <div slot="item-text">我的</div>
       </tab-bar-item>
    </tar-bar>
    <router-view/>
  </div>
</template>

<script>
  import tabBar from "./components/TabBar/TabBar";
  import tabBarItem from "./components/TabBar/TabBarItem";
  export default {
    name: "App",
    components: {
      tarBar: tabBar,
      tabBarItem: tabBarItem
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  #tab-bar {
    display: flex;
    background-color: whitesmoke;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>
