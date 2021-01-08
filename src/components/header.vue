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
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 mr-5" type="submit">Search</b-button>
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
export default {
    name: 'Header',
    methods: {
      
    login() {
      this.$auth.loginWithRedirect();
    },

    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
    }
}
</script>
