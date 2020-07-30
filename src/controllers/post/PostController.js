const { default: Post } = require("../../models/Post");

class PostController {
  async getAll() {
    let post = new Post();
    return await post.getAll();
  }

  async getByID(postID) {
    let post = new Post();
    return await post.getByID(postID);
  }

  async getByCategoryID(postID) {
    let post = new Post();
    return await post.getByCategoryID(postID);
  }
}

export default PostController;
