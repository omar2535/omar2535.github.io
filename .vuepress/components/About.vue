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
    </div>
    <div id="body">
      <p>Hi there, I'm Omar! I'm currently doing my masters at Simon Fraser University studying Cybersecurity. 
        In my free time, I love to code and learn about a variety of subjects such as investing
         and low level hardware. I also love to listen to podcasts and audio books. 
      </p>
    </div>
    
    <!-- Divide credentials -->
    <div class="cert-div">
      <div id="professional-certs-div">
      <h2> Professional Certifications </h2>
        <a href="https://www.credly.com/badges/d36c34f0-3133-4dbf-8d1b-9cd7d317ef09/public_url" target="_blank">
          <img class="cert-icon" src="../content/oswe.png"/>
        </a>
        <a href="https://www.credly.com/badges/60287ace-0874-4fc5-83ce-72a025cd9736/public_url" target="_blank">
          <img class="cert-icon" src="../content/oscp.png"/>
        </a>
        <a href="https://www.credly.com/badges/1004eff7-e62a-4126-8494-570debaf29dd/public_url" target="_blank">
          <img class="cert-icon" src="../content/awscsaa.png"/>
        </a>
        <a href="https://www.credly.com/badges/5209dd47-e5a3-49e9-93d2-936aa87afdfc/public_url" target="_blank">
          <img class="cert-icon" src="../content/btl1.png"/>
        </a>
      </div>
    </div>

    <div class="cert-div">
      <div id="personal-certs-div">
      <h2> Personal Certifications </h2>
        <ul>
          <li ><a href="https://www.boaterexam.com/canada/britishcolumbia/">Pleasure Craft Operator</a> </li>
          <li> <a href="https://www.responsibleservicebc.gov.bc.ca/serving-it-right-course">Serving-It-Right</a> </li>
        </ul>
      </div>
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
  #professional-certs-div{
    padding-top: 0%;
  }

  .cert-div {
    padding-top: 5em;
  }
  
  a {
    color: inherit;
    padding: 1em;
  }

  ul {
    text-align: center;
    list-style-position: inside;
    list-style: none;
  }
</style>
