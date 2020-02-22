<template>
  <div v-bind:class="[post]">
    <h1 v-if="error">{{ error }}</h1>
    <VueMarkdown v-if="post">{{ post.body }}</VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      post: null,
      error: ""
    };
  }
};
</script>

<style>
</style>
