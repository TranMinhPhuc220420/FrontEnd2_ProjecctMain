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
}

export default PostController;
