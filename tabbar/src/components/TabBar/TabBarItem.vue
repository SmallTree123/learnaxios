<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="isActive">
      <slot  name="item-icon"/>
    </div>
    <div v-else>
      <slot  name="item-icon-active"/>
    </div>
    <div :class="{active: isActive}">
      <slot  name="item-text"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive(){
        return this.$route.path===this.path;
      }
    },
    methods: {
      btnClick(){
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 3px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
  .active {
    color: blue;
  }
</style>