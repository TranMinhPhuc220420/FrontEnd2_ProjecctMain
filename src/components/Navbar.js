import React, { Component } from "react";
import CategoryController from "../controllers/category/CategoryController";

class Navbar extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    let categoryController = new CategoryController();
    this.setState({ data: await categoryController.getAll() });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="http://localhost:3000/">
            <div className="logo top">
              <span>Sky</span>
              <span>News</span>
            </div>
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {this.state.data.map(el => (
                <li className="nav-item" key={el.id_category}>
                  <a className="nav-link" href="#">
                    <span className="hv-l category" data-id={el.id_category}>
                      {el.NAME}
                    </span>
                  </a>
              </li>
              ))}
            </ul>

            <form action="<?php echo urlPage . 'pages/search.php' ?>" className="form-inline my-2 my-lg-0" >
              <input name="key"className="form-control mr-sm-2" type="text" placeholder="Tìm theo tên bài..." />
              <button className="btn btn-danger my-2 my-sm-0" type="submit"> Search </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
