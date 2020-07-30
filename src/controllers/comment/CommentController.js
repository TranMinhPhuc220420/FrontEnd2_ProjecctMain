const { default: Comment } = require("../../models/Comment");

class CommentController {
  async addNewComment(id_post, username, content) {
    let comment = new Comment();
    return await comment.addNewComment(id_post, username, content);
  }

  async getByIdPost(id_post) {
    let comment = new Comment();
    return await comment.getByIdPost(id_post);
  }
}

export default CommentController;
