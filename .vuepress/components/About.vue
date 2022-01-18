<template>
  <div id="about-me">
    <div id="profile-heading">
      <div id="profile-heading-text">
        <h1 id="name"> Omar Tsai </h1>
        <a :href="'//' + linkedinUrl" target="_blank">Linkedin</a>
        <a :href="'//' + githubUrl" target="_blank"> Github</a>
        <a :href="'//' + twitterUrl" target="_blank">Twitter</a>
      </div>
      <img id="profile_image" src="../content/website_pic.jpg">
      <!-- <div id="certs-div">
        <a href="https://www.credly.com/badges/d36c34f0-3133-4dbf-8d1b-9cd7d317ef09/public_url" target="_blank">
          <img class="cert-icon" src="../content/oswe.png"/>
        </a>
        <a href="https://www.credly.com/badges/60287ace-0874-4fc5-83ce-72a025cd9736/public_url" target="_blank">
          <img class="cert-icon" src="../content/oscp.png"/>
        </a>
        <a href="https://www.credly.com/badges/1004eff7-e62a-4126-8494-570debaf29dd/public_url" target="_blank">
          <img class="cert-icon" src="../content/awscsaa.png"/>
        </a>
      </div> -->
    </div>
    <div id="body">
      <p>Hi there, I'm Omar! I'm currently doing my masters at Simon Fraser University studying Cybersecurity. 
        In my free time, I love to code and learn about a variety of subjects such as investing
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
    padding-bottom: 2px;
  }
  #name{
    margin: auto;
    padding-bottom: 10%;
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
  .cert-icon{
    width: 70px;
    height: 70px;
  }
  #certs-div{
    padding-top: 0%;
  }
  a {
    color: inherit;
    padding: 1em;
  }
</style>
