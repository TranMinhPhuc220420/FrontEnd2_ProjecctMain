import React, { Component } from 'react';
import CommentList from '../components/CommentList';

class CommentPanel extends Component {
    render(){
        return(
            <div class="comment-panel">
                <h5>Bình luận: </h5>
                <CommentList/>
                <form class="form-post">
                    <input type="text" class="form-control mr-2" id="inputName" placeholder="Tên..."/>
                    <input type="text" class="form-control mr-2" id="inputComment" placeholder="Viết bình luận..."/>
                    <button type="submit" class="btn btn-danger">Đăng</button>
                </form>
            </div>
        );
    };
}
export default CommentPanel