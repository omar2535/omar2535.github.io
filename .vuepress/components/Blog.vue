
<template>
  <div class="posts" v-if="posts.length">
    <div class="posts-container">
      <div class="post" v-for="post in posts">
        <div class="card" style="width: 18rem;">
          <router-link :to="post.path">
            <div class="wrapper">
              <img v-if="post.frontmatter.image" :src="$withBase(post.frontmatter.image)" class="card-img-top">
              <img v-else :src="$withBase('/images/blog/default-post-image.jpg')" class="card-img-top">
            </div>
          </router-link>
          <div class="card-body">
            <router-link :to="post.path">
              <h3 class="card-title">{{ post.frontmatter.title }} </h3>
            </router-link>
            <h6 class="card-author"> {{ post.frontmatter.author }} </h6>
            <hr />
            <p class="card-text"> {{ post.frontmatter.description }} </p>
            <p class="card-text"><small class="text-muted">{{ new Date(post.frontmatter.date).toLocaleDateString() }} </small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
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
  color: rgb(22, 181, 255);
}

.card{
  margin: 2em;
}

p { margin:0 }

.card-author{
  margin-top: 0px;
}

</style>