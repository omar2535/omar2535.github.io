<template>
  <div id="about-me">
    <div id="profile-heading">
      <img id="profile_image" src="../assets/profile_image.jpg">
      <div id="profile-heading-text">
        <h1 id="name"> Omar Tsai </h1>
        <a :href="'//' + linkedinUrl" target="_blank"> <font-awesome-icon far size="lg" :icon="faLinkedin" /> </a>
        <a :href="'//' + githubUrl" target="_blank"> <font-awesome-icon far size="lg" :icon="faGithub" /> </a>
        <a :href="'//' + twitterUrl" target="_blank"> <font-awesome-icon far size="lg" :icon="faTwitter" /> </a>
      </div>
    </div>
    <div id="body">
      <p>Hi there! I'm Omar. I am a student at the University of British Columbia
         pursuing a bachelor's degree in Physics and Computer Science. On my free time, I love to code 
         and learn about a variety of subjects such as investing
         and interesting scientific topics. I also love to listen to podcasts and audio books. 
         There's not much to write here since many of my other social media profiles are more complete
         and thus, I will instead be mostly writing about my personal thoughts, interests, and opinions here.
      </p>
    </div>
  </div>
</template>

<script>
//import font-awesome
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

export default {
  created() {
    document.title = "About me"
  },
  data() {
    return {
      faLinkedin,
      faGithub,
      faTwitter,
      faAt,
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
