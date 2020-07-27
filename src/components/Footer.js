import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 footer-left">
                <a className="link" href="<?php echo urlPage ?>index.php">
                    <div className="logo">
                        <span>Sky</span>
                        <span>News</span>
                    </div>
                </a>

                <ul className="footer-social nav">
                    <li>
                        <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-google" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-md-6 footer-right">
                <h5>Liên hệ:</h5>
                <p><strong>className</strong>: Front End 2</p>
                <p><strong>Facebook:</strong> https://www.facebook.com</p>
                <p><strong>Tel:</strong> 123123123123</p>
            </div>
        </div>
    </div>
    )
  }
}

export default Footer