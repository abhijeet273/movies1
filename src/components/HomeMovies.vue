<template>
  <div>
    <h3>Latest Movies</h3>
    <template>
      <div class="mb-0">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          background="rgb(24, 26, 27)"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;" >    
          <b-carousel-slide>
            <template #img>
                <b-container class="bv-example-row">
                  <b-row>
                    <b-col cols="3" class="mb-5" v-for= "(LatestMovie, index) in allMovies" :key="index">
                      <router-link :to="{ name: 'Movie', params: { id: index } }">
                      <MovieCard :title= "LatestMovie.title" :image1= "LatestMovie.image1" />
                      </router-link>
                    </b-col>
                </b-row>
              </b-container>
            </template>
          </b-carousel-slide>     
        </b-carousel>
      </div>
    </template>
  </div>
  <!-- movies cards carousal -->    

</template>

<script>
import MovieCard from './MovieCard'
import axios from 'axios';


export default {
  name: 'HomeMovies',
  components: {
    MovieCard
  },
  data(){
    return{
        allMovies: null
    }
    },
  mounted: function() {
    axios.get('https://sfrbp8a2m7.execute-api.us-east-1.amazonaws.com/dev/movies')
        .then(response=> this.allMovies = response.data);
  }
}
</script>

<style scoped>
h3 {
  color: blue;
  margin-left: 130px;
  padding-top: 0px;
  border: none;
  margin-bottom: 10px;
}
#mostPopular {
  margin-top: 20px;
}
</style>


