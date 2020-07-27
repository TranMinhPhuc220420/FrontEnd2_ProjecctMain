const { default: Post } = require("../../models/Post");

class PostController {
  async getAll() {
    let post = new Post();
    return await post.getAll();
  }
}

export default PostController;
