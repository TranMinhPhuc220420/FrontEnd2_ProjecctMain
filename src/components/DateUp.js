import React, { Component } from 'react';

import front_end_2_inc from '../front_end_2_inc';

class DateUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content_print : null
    };
  }

  async componentDidMount() {
    let datetimeUp_raw = new Date(this.props.datetimeUp);
    let dateNow = new Date();
    if (datetimeUp_raw.getMinutes() === dateNow.getMinutes() && datetimeUp_raw.getHours() === dateNow.getHours()) {
       this.setState({ content_print: 'mới đây'});
    }else{
      if (datetimeUp_raw.getHours() == dateNow.getHours() && datetimeUp_raw.getDay() == dateNow.getDay()) {
        let print = <span> <i className="fa fa-clock"> </i> {dateNow.getMinutes() - datetimeUp_raw.getMinutes()} phút trước </span>;
        this.setState({ content_print: print})
      }else{
        if (datetimeUp_raw.getDay() == dateNow.getDay() && datetimeUp_raw.getMonth() == dateNow.getMonth()) {
            let print = <span> <i className="fa fa-clock"></i>  { dateNow.getHours() - datetimeUp_raw.getHours() } giờ trước </span>;
            this.setState({ content_print: print})
        }else{
            let print = <span> <i className="fa fa-calendar-alt"></i>  { datetimeUp_raw.getDay() + '-' + datetimeUp_raw.getMonth() + '-' + datetimeUp_raw.getFullYear()}</span>;
            this.setState({ content_print: print})
        }
      }
    }

  }

  render() {
    return (this.state.content_print);
  }
}

export default DateUp