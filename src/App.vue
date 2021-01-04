<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      moviesdb: null
    }
  },
  mounted: function() {
    axios.get('https://sfrbp8a2m7.execute-api.us-east-1.amazonaws.com/dev/movies')
        .then(response=> this.moviesdb = response.data);
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>



