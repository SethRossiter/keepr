<template>
  <div id="app">
    <!--<img src="./assets/logo.jpg">-->
    <router-view></router-view>
  </div>
</template>

<script>
import Error from './components/Error'
export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('getAuth')
  },
  components: {
    Error
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

body {
   background-color:rgba(0, 0, 0, 0.5);
}
</style>
