<template>
<nav>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      
      <b-navbar-brand to="/">Omar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-item to="/about">About Me</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
<style scoped>
</style>
