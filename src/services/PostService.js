/**
 * Useful getters for posts of the blog
*/

// const postsFolder = '../../public/posts';
// const fs = require('fs');

const posts = require("../../public/posts_list.js");

class PostService {
  static getPosts() {
    console.log(posts);
  }
}

export default PostService;