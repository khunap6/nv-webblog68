<template>
  <div id="app">
    <back-header />
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 5px;
  text-align: left;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>