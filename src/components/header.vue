<template>
<div> 

<b-navbar toggleable="lg" type="dark" variant="info">
  <router-link to="/">
    <b-navbar-brand>MoviesArena</b-navbar-brand>
  </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form>
          <b-form-input v-model= "movieIndex" size="sm" class="mr-sm-2" list="my-list-id" placeholder="Search"></b-form-input>
          <datalist id="my-list-id">
            <option v-for= "(movie, index) in allMovies" :key= "index" :value= "index">{{ movie.title }}</option>
          </datalist>
          <b-button size="sm" class="my-2 my-sm-0 mr-5" @click="onSubmit" >Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav v-if= "!$auth.loading" class="ml-auto">

       <b-nav-item v-if= "!$auth.isAuthenticated" @click= "login" class="ml-5 float-right">Signup or Login</b-nav-item>

       <b-nav-item v-if= "$auth.isAuthenticated" @click= "logout" class="ml-5 float-right">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Header',

    data(){
      return{
        movieIndex: null,
        allMovies: null
      }
    },

    methods: {
      login() {
        this.$auth.loginWithRedirect();
      },

      logout() {
        this.$auth.logout({
          returnTo: window.location.origin
        });
      },

      onSubmit(event) {
        event.preventDefault()
        this.$router.push({ name: 'Movie', params: { id: this.movieIndex } })
      }
    },

    mounted: function() {
      axios.get('https://sfrbp8a2m7.execute-api.us-east-1.amazonaws.com/dev/movies')
          .then(response=> this.allMovies = response.data);
  }

}
</script>
