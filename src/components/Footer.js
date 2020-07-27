import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 footer-left">
          <a class="link">
            <div class="logo">
              <span>Sky</span>
              <span>News</span>
            </div>
          </a>

          <ul class="footer-social nav">
            <li>
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fab fa-youtube" aria-hidden="true"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-google" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-6 footer-right">
          <h5>Liên hệ:</h5>
          <p><strong>Class</strong>: Front End 2</p>
          <p><strong>Facebook:</strong> https://www.facebook.com</p>
          <p><strong>Tel:</strong> 123123123123</p>
        </div>
      </div>
    </div>
    )
  }
}

export default Footer