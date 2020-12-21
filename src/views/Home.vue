<template>
<div>
  <Header />
  <!-- jumbotron header -->
  <Jumbotron />
  <!-- movies cards carousal -->  
  <HomeMovies />
  
</div>
</template>

<script>
import HomeMovies from '../components/HomeMovies'
import Header from '../components/header'
import Jumbotron from '../components/jumbotron'
export default {
  name: 'Home',
  components: {
    Header,
    Jumbotron,
    HomeMovies
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->