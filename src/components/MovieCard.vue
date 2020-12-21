<template>
    <b-card
    title="Tenet"
    img-src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
        <b-card-text>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span> - 3/5
        </b-card-text>
        <b-button href="#" variant="primary">Watch Trailer</b-button>
    </b-card>
</template>

<script>
export default {
name: "MovieCard",
components: "StarRating"
}
</script>

<style scoped>
  .checked {
  color: orange;
}
</style>>
