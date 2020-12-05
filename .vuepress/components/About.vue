<template>
  <div id="about-me">
    <div id="profile-heading">
      <img id="profile_image" src="../content/profile_image.jpg">
      <div id="profile-heading-text">
        <h1 id="name"> Omar Tsai </h1>
        <a :href="'//' + linkedinUrl" target="_blank">Linkedin</a>
        <a :href="'//' + githubUrl" target="_blank"> Github</a>
        <a :href="'//' + twitterUrl" target="_blank">Twitter</a>
      </div>
    </div>
    <div id="body">
      <p>Hi there! I'm Omar. I am a student at the University of British Columbia
         pursuing a Bachelor's degree in Physics and Computer Science. In my free time, I love to code 
         and learn about a variety of subjects such as investing
         and low level hardware. I also love to listen to podcasts and audio books.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
  },
  data() {
    return {
      linkedinUrl: "linkedin.com/in/omar2535/",
      githubUrl: "github.com/omar2535",
      twitterUrl: "twitter.com/Omar_2535",
    }
  },
  name: "About"
}
</script>

<style scoped>
  #profile_image{
    width: 200px;
    height: auto;
    border-radius: 10%;
    display:inline-block;
    vertical-align:top;
  }
  #profile-heading-text{
    display:inline-block;
    padding: 70px 20px;
  }
  #name{
    margin: auto;
  }
  #profile-heading{
    width: 100%;
    text-align: center;
    padding: 10px;
  }
  #about-me{
    text-align: center;
  }
  #body{
    padding-left: 20%;
    padding-right: 20%;
  }
  a {
    color: inherit;
    padding: 1em;
  }
</style>
