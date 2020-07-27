const { default: Category } = require("../../models/Category");

class CategoryController {
  async getAll() {
    let category = new Category();
    return await category.getAll();
  }
}

export default CategoryController;
