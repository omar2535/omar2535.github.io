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
      <p>Hi there, I'm Omar! I'm a software developer and cybersecurity professional from Vancouver!
         I did my B.Sc in Computer Science and Physics at the University of British Columbia and my M.Sc in computer science at Simon Fraser University.
         I have an interest in social economics and general technology. On my free time, I spend most of my time making music or playing
         the piano / guitar.
      </p>
      <p>I hope that gives you a small sense of who I am!</p>
    </div>

    <!-- Divide credentials -->
    <div class="cert-div">
      <div id="social-links">
      <h2>Content</h2>
        <a href="https://youtube.com/@Omar_Tsai" target="_blank">
          <img class="social-icon" src="../content/youtube_icon.png"/>
        </a>
        <a href="https://open.spotify.com/artist/4j9BOWLHh5eFnsRreTa81P?si=cuBriYL9RnK0JYNfVTwcaA" target="_blank">
          <img class="social-icon" src="../content/spotify_icon.png"/>
        </a>
        <a href="https://music.apple.com/us/artist/omar-tsai/1691961274" target="_blank">
          <img class="social-icon" src="../content/apple_music_icon.png"/>
        </a>
        <a href="https://music.youtube.com/channel/UCFpRyNlBRnYTICXuPseZo8w" target="_blank">
          <img class="social-icon" src="../content/youtube_music_icon.png"/>
        </a>
      </div>
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
        <a href="https://www.credential.net/7345e1b5-cc5b-4430-8751-50cf60ff5e1d#gs.7elb7j" target="_blank">
          <img class="cert-icon" src="../content/cartp.png"/>
        </a>
        <a href="https://www.credly.com/badges/1004eff7-e62a-4126-8494-570debaf29dd/public_url" target="_blank">
          <img class="cert-icon" src="../content/awscsaa.png"/>
        </a>
        <a href="https://www.credly.com/badges/5209dd47-e5a3-49e9-93d2-936aa87afdfc/public_url" target="_blank">
          <img class="cert-icon" src="../content/btl1.png"/>
        </a>
        <a href="https://www.credly.com/badges/395eac7d-b46e-41c0-9204-13354ea5bd83/public_url" target="_blank">
          <img class="cert-icon" src="../content/az-900.png"/>
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
  #professional-certs-div{
    padding-top: 0%;
  }
  .cert-icon{
    width: 70px;
    height: 70px;
  }

  .social-icon {
    width: 60;
    height: 60px;
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
