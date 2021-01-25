<template>
<div>
  <Header />
  <div class="container mt-5">
    <b-card class="mt-3" header="Post your review">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Your Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.author"
          placeholder="Enter your name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Overall Impression:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.impression"
          placeholder="Your overall impression of movie"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Rate the movie:" label-for="input-5">
        <b-form-rating 
        id="input-5"
        v-model="form.rating">
        </b-form-rating>
      </b-form-group>

      <b-form-group id="input-group-3" label="Furter Comments:" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="form.content"
          placeholder="What do you think about the movie"
          required
        ></b-form-textarea>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </b-card>
  </div>
</div>
</template>

<script>
import Header from '../components/header'
import axios from "axios"
export default {
    name: "NewReview",
    components: {
        Header
    },
    data() {
      return {
        form: {
          impression: '',
          author: '',
          content: '',
          rating: null
        },
        allMovies: null,
        index: this.$route.params.id
      }
    },
    
    mounted: function() {
    axios.get('https://sfrbp8a2m7.execute-api.us-east-1.amazonaws.com/dev/movies')
        .then(response=> this.allMovies = response.data);
  },

    methods: {
      onSubmit(event) {
        event.preventDefault()
        
        axios.put("https://sfrbp8a2m7.execute-api.us-east-1.amazonaws.com/dev/movie/" + this.allMovies[this.index].id + "/review", this.form)
             .then(() => this.$router.push({name: 'Movie', params: { id: this.index}}))
      },
      
    }
}
</script>

<style>

</style>