<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TarBar"
  }
</script>

<style scoped>

  @import "../../assets/css/base.css";
  #tab-bar {
    display: flex;
    background-color: whitesmoke;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>