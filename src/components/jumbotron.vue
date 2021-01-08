<template>
  <header class="jumbotron py-4  mx-auto mb-3">
		<div class="container">
			<h1>Welcome to the MoviesArena</h1>
			<p>View our handpicked movies catalogue here</p>
			<p>
				<router-link to="/newmovie">
				<a v-if="$auth.isAuthenticated" class="btn btn-primary btn-lg">Add new Movie</a>
				</router-link>
			</p>
		</div>
  </header>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>
