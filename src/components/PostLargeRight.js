import React, { Component } from 'react';
import img1 from '../public/images/hinh01-1.jpg'
import img2 from '../public/images/hinh19.jpg'
import img3 from '../public/images/hinh31.jpg'

import PostLargeRightItem from '../components/PostLargeRightItem'

class PostLargeRight extends Component {
    render() {
            let data = {
                postBig1: {
                    'img': img1,
                    'category': 'Chính trị',
                    'title': 'Chủ tịch Hà Nội: Hành khách VN0054 cách ly tại nhà vẫn đi ra ngoài',
                    'sapo': 'Chủ tịch UBND Hà Nội cho biết có trường hợp hành khách trên chuyến bay VN0054 đang cách ly tại nhà, nhưng thực hiện không nghiêm túc, vẫn ra khỏi nhà…'
                    },
                postBig2: {
                    'img': img2,
                    'category': 'Công nghệ',
                    'title': 'Bắt quả tang cơ sở đun nóng nhựa đường để "nhúng" vịt',
                    'sapo': 'Thời điểm bắt quả tang, cơ sở kinh doanh không phép này đang sử dụng gần 10kg nhựa thông và nhựa đường phục vụ việc làm sạch lông vịt.'
                },
                postBig3: {
                    'img': img3,
                    'category': 'Thế giới',
                    'title': 'Người trốn cách ly Covid-19 tại Nga có thể bị phạt tù 5 năm',
                    'sapo': 'Chính quyền thủ đô Moscow, Nga cho biết sẽ áp dụng mức phạt tù 5 năm cho bất kỳ công dân nào không tự cách ly tại nhà trong hai tuần, sau khi họ từ vùng dịch trở về.'
                },
            };

    return (
        <div id="category-1" className="post-dep-cate" data-cate="cate-1">
            <PostLargeRightItem active={true} data={data.postBig1}/>
        </div>
    )
    }
}

export default PostLargeRight