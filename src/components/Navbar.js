import React, { Component } from "react";
import { Link } from 'react-router-dom';

import CategoryController from "../controllers/category/CategoryController";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount() {
    let category = new CategoryController();
    this.setState({items: await category.getAll()})
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">

          <Link className="navbar-brand" to="/">
            <div className="logo top">
              <span>Sky</span>
              <span>News</span>
            </div>
          </Link>
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
              {this.state.items.map(el => (
                <Link  className="nav-link" to='/search' key={el.id_category}>
                  <li className="nav-item" key={el.id_category}>
                    <span className="hv-l category" data-id={el.id_category}>
                      {el.NAME}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
            <form action="<?php echo urlPage . 'pages/search.php' ?>" className="form-inline my-2 my-lg-0">
                <input name="key" className="form-control mr-sm-2" type="text" placeholder="Tìm theo tên bài..."/>
                <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
