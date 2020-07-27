import React, { Component } from 'react';

import PostBigItem from '../components/PostBigItem'
import img1 from '../public/images/hinh05-1.jpg'

class PostBig extends Component {
    render() {
            let data = {
                post: {
                'img': img1,
                'category': 'Chính trị',
                'title': 'Kiện toàn tổ chức, nhân sự 3 tỉnh thành',
                'sapo': 'UBND tỉnh Long An, Tỉnh ủy Thanh Hóa, Thành ủy TP.HCM vừa công bố và trao các quyết định về công tác tổ chức cán bộ.',
                'time': '03-09-2020'
                },
            };

        return (
            <PostBigItem active={true} data={data.post}/>
        );
    }
}

export default PostBig