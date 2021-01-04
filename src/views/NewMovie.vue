<template>
<div>
  <Header />
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          placeholder="Enter movie title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Image1:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.image1"
          placeholder="Enter image url"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Image2:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.image2"
          placeholder="Enter image url"
          required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-4" label="Genre:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.genre"
          placeholder="Enter movie genre"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Rating:" label-for="input-5">
        <b-form-rating 
        id="input-5"
        v-model="form.rating">
        </b-form-rating>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</div>
</template>

<script>
import Header from '../components/header'
import axios from "axios"
export default {
    name: "NewMovie",
    components: {
        Header
    },
    data() {
      return {
        form: {
          title: '',
          image1: '',
          image2: '',
          genre: '',
          rating: null
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        
        axios.post("https://sfrbp8a2m7.execute-api.us-east-1.amazonaws.com/dev/movie", this.form)
             .then(this.$router.push({name: 'Home'}))

      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.image1 = ''
        this.form.image2 = ''
        this.form.genre = ''
        this.form.rating = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style>

</style>