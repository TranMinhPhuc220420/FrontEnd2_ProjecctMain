class Component {
  async getByIdPost(idPost) {
    const data = {
      post_id: idPost,
    };
    const url = 'http://localhost:8080/www/FrontEnd2/FontEnd2_BackEndMain/comment/getByIdPost.php';
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  }

  async addNewComment(id_post, username, content) {
    const url = 'http://localhost:8080/www/FrontEnd2/FontEnd2_BackEndMain/comment/addNewComment.php';
    const data = {
      idPost: id_post,
      username: username,
      comment: content
    };
    let result = false;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data)
    }).then(function () {
      result = true;
    }).catch((error) => {
      console.error('Error:', error);
      result = false;
    });

    return result;
  }
}

export default Component;
