import React, { Component } from 'react';

import PostLargeLeftItem from '../components/PostLargeLeftItem'
import img1 from '../public/images/hinh12.jpg'
import img2 from '../public/images/hinh24-1.jpg'

class PostLargeLeft extends Component {
    render() {
            let data = {
                    postBig1: {
                        'img': img1,
                        'category': 'Kinh tế',
                        'title': 'Vợ chồng người Anh nhiễm Covid-19 từng đến nhà tù Hỏa Lò',
                        'sapo': 'Di tích Nhà tù Hỏa Lò tạm ngừng đón khách để khử khuẩn, các nhân viên di tích được cách ly sau khi 2 du khách nhiễm Covid-19 từng đến đây.'
                    },     
                    postBig2: {
                        'img': img2,
                        'category': 'Giải trí',
                        'title': 'Hòa Hiệp xót thương bệnh tình ung thư phổi của Mai Phương',
                        'sapo': 'Diễn viên Hòa Hiệp, bạn bè, đồng nghiệp cầu nguyện cho bệnh tình của Mai Phương.'
                    },
                };

            return (
                <div id="category-2" class="post-dep-cate" data-cate="cate-2">
                    <PostLargeLeftItem active={true} data={data.postBig1}/>
                </div>
            )
    }
}

export default PostLargeLeft
