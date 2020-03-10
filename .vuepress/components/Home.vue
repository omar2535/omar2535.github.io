<template>
  <div>
    <p class="marquee"> <span> {{ hello }} </span> </p>
    <h3 id="title">Welcome</h3>
    <div id="content">
      <p>To visit my blog, click <router-link to="/blog/">blog</router-link></p>
      <p>To view my notes, click <router-link to="/notes/">notes</router-link></p>
      <p>To know more about me, <router-link to="/about/">about me</router-link></p>
    </div>
  </div>
</template>

<script>
import multilanguage_hello_json from "../content/multilanguage-hello.json";

// convert the multi-langauge hello's to a string for the scrolling text
const multilanguage_hellos = multilanguage_hello_json.map(e => e.hello);
const multiLanguageHellosString = multilanguage_hellos.join("  ");

export default {
  name: "Home",
  created() {
  },
  data: () => {
    return {
      hello: multiLanguageHellosString
    }
  }
}

</script>

<style scoped>
  #title {
    text-align: center;
    padding-top: 1em;
  }
  #content {
    text-align: center;
    padding: 1em;
  }
  .marquee {
    width: 100%;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
  }

  .marquee span {
    display: inline-block;
    padding-left: 100%;
    /* show the marquee just outside the paragraph */
    animation: marquee 120s linear infinite;
  }

  .marquee span:hover {
    animation-play-state: paused
  }

  /* Make it move */
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
</style>
