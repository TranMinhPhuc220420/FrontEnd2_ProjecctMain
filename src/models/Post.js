class Post {
  async getAll() {
    const url = 'http://localhost:8080/www/FrontEnd2/FontEnd2_BackEndMain/post/getAll.php';
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return await response.json();
  }

  async getByID(idPost) {
    const data = {
              post_id: idPost,
          };
    const url = 'http://localhost:8080/www/FrontEnd2/FontEnd2_BackEndMain/post/getByID.php';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  }

  async getByCategoryID(category_id) {
    const data = {
              category_id: category_id,
          };
    const url = 'http://localhost:8080/www/FrontEnd2/FontEnd2_BackEndMain/post/getByCategory.php';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  }
}

export default Post;
