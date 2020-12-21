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
                    <b-col>
                      <MovieCard/>
                    </b-col>
                    <b-col>
                      <MovieCard/>
                    </b-col>
                    <b-col>
                      <MovieCard/>
                    </b-col>
                </b-row>
              </b-container>
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
                <b-container class="bv-example-row">
                  <b-row>
                    <b-col>
                      <MovieCard/>
                    </b-col>
                    <b-col>
                      <MovieCard/>
                    </b-col>
                    <b-col>
                      <MovieCard/>
                    </b-col>
                </b-row>
              </b-container>
            </template>
          </b-carousel-slide>     
        </b-carousel>
      </div>
    </template>

    <h3 id="mostPopular">Most Popular</h3>

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
                    <b-col>
                      <MovieCard/>
                    </b-col>
                    <b-col>
                      <MovieCard/>
                    </b-col>
                    <b-col>
                      <MovieCard/>
                    </b-col>
                </b-row>
              </b-container>
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
                <b-container class="bv-example-row">
                  <b-row>
                    <b-col>
                      <MovieCard/>
                    </b-col>
                    <b-col>
                      <MovieCard/>
                    </b-col>
                    <b-col>
                      <MovieCard/>
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

export default {
  name: 'HomeMovies',
  components: {
    MovieCard
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


