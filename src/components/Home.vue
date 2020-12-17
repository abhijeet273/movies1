<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">MoviesArena</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 mr-5" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
       <b-nav-item class="ml-5 float-right">Signup or login</b-nav-item>
     </b-navbar-nav>
    </b-collapse>

  </b-navbar>
  <header class="jumbotron py-4  mx-auto mb-4">
		<div class="container">
			<h1>Welcome to the MoviesArena</h1>
			<p>View our handpicked movies catalogue here</p>
			<p>
				<a class="btn btn-primary btn-lg" href="#">Add new Movie</a>
			</p>
		</div>
	</header>
  <h3>Latest Movies</h3>
  
</div>

</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: blue;
  margin-left: 50px;
  margin-top: 0px;
  padding-top: 0px;
}
</style>
