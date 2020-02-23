<template>
  <div class="posts">
    <h1>Latest Posts</h1>
    <hr>
    <h3>Under construction🚧</h3>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post" v-for="post in posts" v-bind:item="post" v-bind:key="post.title">
        <div class="card" style="width: 18rem;">
          <router-link v-bind:to="`/blog/${makeURL(post)}`">
            <div class="wrapper">
              <img v-if="parseFirstImageFromPost(post)" v-bind:src="parseFirstImageFromPost(post)" class="card-img-top">
            </div>
          </router-link>
          <div class="card-body">
            <router-link v-bind:to="`/blog/${makeURL(post)}`">
              <h3 class="card-title">{{ post.title }} </h3>
            </router-link>
            <hr />
            <p class="card-text"> {{getBodyPreview(post)}} </p>
            <p class="card-text"><small class="text-muted">{{ new Date(post.date).toLocaleDateString() }} </small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostAnalyzer from "../services/PostAnalyzer.js";
import PostService from "../services/PostService.js";
export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    };
  },
  created() {
    document.title = "Blog"
    PostService.getPosts();
    // let postPlaceholder = await PostService.getPosts();
    // this.posts = postPlaceholder.sort();
  },
  methods: {
    makeURL(post) {
      return `${post.title.split('.')[0].replace(/ /g, '-')}`;
    },
    parseFirstImageFromPost(post) {
      return PostAnalyzer.getFirstImageFromPost(post) || require('../assets/default-image.jpg');
    },
    getBodyPreview(post) {
      return PostAnalyzer.getBodyPreview(post.body, 20) || null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.posts{
  margin-top: 2%;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

.posts-container{
  display: flex; /* or inline-flex */
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  justify-content: center;
}

.wrapper {
  position: relative;
  overflow: hidden;
}

.wrapper:after {
  content: '';
  display: block;
  padding-top: 70%;
}

.wrapper img {
  width: auto;
  height: 100%;
  max-width: none;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

a {
  color: black;
  text-decoration: none;
}

a:hover{
  text-decoration: none;
  color: rgb(24, 255, 255);
}

.card{
  margin: 2em;
}
h1{
  text-align: center;
}
h3{
  text-align: center;
}

</style>
