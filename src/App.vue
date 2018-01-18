<template>
  <div id="app">
    <Bottombar></Bottombar>
    <router-view/>
  </div>
</template>

<script>
  import Bottombar from './components/bottombar.vue';
export default {
  name: 'app',
  components:{
    Bottombar
  }
}
</script>

<style>
#app {
  margin: 61px 0;
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
