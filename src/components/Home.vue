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

  <!-- jumbotron header -->
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

  <!-- movies cards -->
  <div class="container text-center my-3">
    <div class="row mx-auto my-auto">
        <div id="myCarousel" class="carousel slide w-100" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item py-5 active">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card 1</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card 2</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card 3</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card 4</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item py-5">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item py-5">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item py-5">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Card</h4>
                                <p class="card-text">Some make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <a class="carousel-control-prev text-dark" href="#myCarousel" role="button" data-slide="prev">
                <span class="fa fa-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next text-dark" href="#myCarousel" role="button" data-slide="next">
                <span class="fa fa-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
  <template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
     
      <b-carousel-slide>
        <template #img>
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
                  </b-card>
                </b-col>
             </b-row>
          </b-container>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
                  </b-card>
                </b-col>
             </b-row>
          </b-container>
        </template>
      </b-carousel-slide>

      
    </b-carousel>
  </div>
</template>

</div>
 
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
  margin-left: 130px;
  margin-top: 0px;
  padding-top: 0px;
}
</style>
