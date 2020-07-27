import React, { Component } from 'react';
import CommentItem from '../components/CommentItem';

class CommentList extends Component {
    render(){
        let dataCmt = {
            cmt1: {
                username: 'Nhu Tran',
                content: 'Hello Nhu ne khoe khong',
                time: '27-7-2020'
            },
            cmt2: {
                username: 'Phuc Tran',
                content: 'Hello Phuc ne khoe khong',
                time: 'moi day'
              },
              cmt3: {
                username: 'Huyen Chinh',
                content: 'Hello Chinh ne khoe khong',
                time: '3h truoc'
              },
              cmt4: {
                username: 'Toan Le',
                content: 'Hello Toan ne khoe khong',
                time: '1 ngay truoc'
              }
          };
        return(
            <div class="comment-list">
                <CommentItem  dataCmt={dataCmt.cmt1}/>
                <CommentItem  dataCmt={dataCmt.cmt2}/>
                <CommentItem  dataCmt={dataCmt.cmt3}/>
                <CommentItem  dataCmt={dataCmt.cmt4}/>
            </div>
        );
    };
}
export default CommentList