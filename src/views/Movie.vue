<template>
  <div>
  <Header/>
  <b-container class="bv-example-row">
    <h1 v-if= "id < 3" class="mt-4">{{LatestMovies[id=id].title}}</h1>
    <h1 v-else class="mt-4">{{PopularMovies[newId].title}}</h1>
    <b-row>
        <b-col cols="8">
            <img v-if= "id<3" class='mb-2 center' :src= "LatestMovies[id].image2" alt="">
            <img v-else class='mb-2 center' :src= "PopularMovies[newId].image2" alt="">
            <div calss='d-block'>Rating</div>
            <div class='d-block'>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span> - 3/5
            </div>
            <div class="d-block mb-2">
                <p> Genre: Action, Adventure, Drama</p>
            </div>
            <div class="block mb-4">
                <h5><strong>Plot:</strong></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <h5><strong>User Reviews:</strong></h5>
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span> - <i><strong>Overall Impression</strong></i>
                    <div class="ml-6"><i>- by Rick Sanchez</i></div>
                    <p class="font-weight-lighter font-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </b-col>
        <b-col cols="4">
            <h3 class="mb-3">Cast</h3>
            <div class="mb-3">- John David Washington</div>
            <div class="mb-3">- Robert Pattinson</div>
            <div class="mb-3">- Elizabeth Debicki</div>
        </b-col>
    </b-row>
  </b-container>
  </div>
</template>
 

<script>
import Header from '../components/header'
import LatestMovies from "../assets/latest.json"
import PopularMovies from "../assets/popular.json"
export default {
    name: "Movie",
    components: {
        Header
    },
    data(){
        return{
           id: this.$route.params.id,
           LatestMovies: LatestMovies,
           PopularMovies: PopularMovies,
           newId: this.$route.params.id - 3
        }
    }
}
</script>

<style scoped>
  img {
      max-width: 100%;
      max-height: 500px;
      object-fit: contain;
  }
    .checked {
  color: orange;
}

</style>
  