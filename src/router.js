import Vue from "vue";
import Router from "vue-router";

// import views
import Blog from './views/Blog.vue';
import About from './views/About.vue';
import Post from './views/Post.vue';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  linkActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/blog/:id",
      name: "post",
      component: Post
    }
  ]
});

export default router;