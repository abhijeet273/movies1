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
                    <b-col cols="3" class="mb-5" v-for= "LatestMovie in LatestMovies" :key="LatestMovie.id">
                      <router-link :to="{ name: 'Movie', params: { id: LatestMovie.id } }">
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
import LatestMovies from "../assets/latest.json"

export default {
  name: 'HomeMovies',
  components: {
    MovieCard
  },
  data(){
    return{
        LatestMovies: LatestMovies,
    }
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


