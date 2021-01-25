<template>
  <div>
  <Header/>
  <b-container class="bv-example-row">
    <h1 class="mt-4">{{allMovies[index].title}}</h1>
    <b-row>
        <b-col cols="8">
            <img class='mb-2 center' :src= "allMovies[index].image2" alt="">
            <b-button-group class="float-right" vertical>
            <b-button v-if= "$auth.isAuthenticated" class= "float-right" size="md" variant="danger" @click= "Delete">Delete Movie</b-button>
            <router-link :to="{ name: 'NewReview', params: { id: index } }">
            <b-button v-if= "$auth.isAuthenticated" class= "float-right mt-2" size="md" variant="warning" >Write a review</b-button>
            </router-link>
            </b-button-group>
            <div calss='d-block'>Rating</div>
            <div class='d-block'>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span> - 3/5
            </div>
            <div class="d-block mb-2">
                <p>{{allMovies[index].genre}}</p>
            </div>
            <div class="block mb-5">
                <h5><strong>Plot:</strong></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <hr>
            <div>
                <h5 class="mb-3" style="text-decoration: underline"><strong>User Reviews:</strong></h5>
                <div v-for= "review in allMovies[index].userReview" :key="review.author">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span> - <i><strong>{{review.impression}}</strong></i>
                    <div class="ml-6"><i>- by {{review.author}}</i></div>
                    <p class="font-weight-lighter font-italic">{{review.content}}</p>
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
import axios from "axios"

export default {
    name: "Movie",
    components: {
        Header
    },
    data(){
        return{
           index: this.$route.params.id,
           allMovies: null
        }
    },
    mounted: function() {
    axios.get('https://sfrbp8a2m7.execute-api.us-east-1.amazonaws.com/dev/movies')
        .then(response=> this.allMovies = response.data);
  },
    methods: {
        Delete(){
            axios.delete('https://sfrbp8a2m7.execute-api.us-east-1.amazonaws.com/dev/movie/' + this.allMovies[this.index].id ).promise()
            .then(()=> this.$router.push({name: 'Home'}) )
        },  
    },

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
  