import React, { Component } from 'react';

class PostSmall extends Component {
    render() {
        return (
            <div class="around-post-small">
                <div class="row">
                    <div class="col-md-4"> 
                        <div class="around-img-post-small">
                            <img src={this.props.dataPostSmall.imgPost} alt="..." class="img-post-small"/>
                        </div>
                    </div>
                    <div class="col-md-8"> 
                        <div class="around-title-post-small">
                            <h5 class="title-post-small"><a href="#" class="link-title-post-small">{this.props.dataPostSmall.titlePost}</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}
export default PostSmall