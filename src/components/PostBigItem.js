import React, { Component } from 'react';

class PostBigItem extends Component {
    render() {
        if (this.props.active){ 
        return (
                <div className="card post post-large" id="row-post-large" data-scroll="in">
                    <div className="inner">
                        <a href="pages/detail.php?idPost=5">
                            <img src={this.props.data.img} className="img-post" alt=""/>
                        </a>
                    </div>
                    <div className="card-body post-body">
                        <p className="category">{this.props.data.category}</p>
                        <h5 className="post-title hv-l">{this.props.data.title}</h5>
                        <p className="card-text post-sapo">{this.props.data.sapo}</p>
                        <p className="post-date-up">
                            <i className="fas fa-calendar-alt"></i>{this.props.data.time}
                        </p>
                    </div>                 
                </div>
            )
            
        } else {
            return (
                <div className="card post post-large" id="row-post-large" data-scroll="in">
                    <div className="inner">
                        <a href="pages/detail.php?idPost=5">
                            <img src={this.props.data.img} className="img-post" alt=""/>
                        </a>
                    </div>
                    <div className="card-body post-body">
                        <p className="category">{this.props.data.category}</p>
                        <h5 className="post-title hv-l">{this.props.data.title}</h5>
                        <p className="card-text post-sapo">{this.props.data.sapo}</p>
                        <p className="post-date-up">
                            <i className="fas fa-calendar-alt"></i>{this.props.data.time}
                        </p>
                    </div>                 
                </div>
            )
        }   
    }
}

export default PostBigItem