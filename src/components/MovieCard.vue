<template>
        <b-card
        :title= "title"
        :img-src= "image1"
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
import LatestMovies from "../assets/latest.json"
export default {
    name: "MovieCard",
    props: {
        title: String,
        image1: String
    },
    data(){
        return{
            LatestMovies: LatestMovies
        }
    }
}
</script>

<style scoped>
  .checked {
  color: orange;
}
</style>>
