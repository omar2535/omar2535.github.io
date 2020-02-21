<template>
  <div>
    <marquee scrollamount= "5" class="scrolling-text" behavior="scroll" direction="left">{{ hello }}</marquee>
    <h3 id="title">Welcome</h3>
    <div id="content">
      <p>To visit my blog, click <router-link to="/blog">blog</router-link></p>
      <p>To know more about me, <router-link to="/about">about me</router-link></p>
    </div>
  </div>
</template>

<script>
import multilanguage_hello_json from "../../public/multilanguage-hello.json";

// convert the multi-langauge hello's to a string for the scrolling text
const multilanguage_hellos = multilanguage_hello_json.map(e => e.hello);
const multiLanguageHellosString = multilanguage_hellos.join("  ");

console.log(multilanguage_hellos);
export default {
  name: "Home",
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
</style>
