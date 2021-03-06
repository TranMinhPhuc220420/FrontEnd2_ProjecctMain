class Category {
  async getAll() {
    const url = 'http://localhost:8080/www/FrontEnd2/FontEnd2_BackEndMain/category/getAll.php';
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return await response.json();
  }
}

export default Category;
