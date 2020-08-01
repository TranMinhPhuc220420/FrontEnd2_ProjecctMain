import React, {Component} from 'react';

//Components
import PostNormal from './PostNormal';
import PostNormalItem from './PostNormalItem';
import PostBig from './PostBig';
import PostList from './PostList';
import PostBasic from './PostBasic';
import PostLargeRight from './PostLargeRight';
import PostLargeLeft from './PostLargeLeft';

class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_post_new: [],
      list_post_normal: [],
      list_post_small: [],
      post_large_random: null,
      list_post_with_category_1: [],
      list_post_with_category_2: [],
      list_post_with_category_3: [],
      list_post_with_category_4: [],
      list_post_with_category_5: []
    };
  }

  async componentDidMount() {
    let arr_temp = [];
    let i;
    for (i = 0; i < 3; i++) {
      arr_temp.push(this.props.data[i]);
    }
    this.setState({list_post_normal: arr_temp});

    arr_temp = [];
    for (i; i < 7; i++) {
      arr_temp.push(this.props.data[i]);
    }
    this.setState({list_post_small: arr_temp});


    //Get random post add to post large
    this.setState({post_large_random: await this.props.data[Math.floor((Math.random() * this.props.data.length) + 1)]});

    //Create list post with category
    let arr_temp_category_1 = [];
    let arr_temp_category_2 = [];
    let arr_temp_category_3 = [];
    let arr_temp_category_4 = [];
    let arr_temp_category_5 = [];

    let list_post_small_1 = [];
    let list_post_small_2 = [];
    let list_post_small_3 = [];
    let list_post_small_4 = [];
    let list_post_small_5 = [];

    this.props.data.forEach(item => {
      let el_add = null;
      switch (item.id_category) {
        case 1:
          if (arr_temp_category_1.length === 0) {
            el_add = <PostLargeRight data={item}/>;
          } else {
            if (arr_temp_category_1.length === 1) {
              el_add = <PostNormalItem data={item}/>;
            } else {
              if (arr_temp_category_1.length === 2) {
                el_add = <PostBasic data={item}/>
              } else {

                if (list_post_small_1.length !== 4) {
                  list_post_small_1.push(item)
                }
              }
            }
          }
          if (el_add != null) {
            arr_temp_category_1.push(el_add);
          }
          break;
        case 2:
          if (arr_temp_category_2.length === 0) {
            el_add = <PostLargeLeft data={item}/>;
          } else {
            if (arr_temp_category_2.length === 1) {
              el_add = <PostNormalItem data={item}/>;
            } else {
              if (arr_temp_category_2.length === 2) {
                el_add = <PostBasic data={item}/>
              } else {
                if (arr_temp_category_2.length !== 4) {
                  list_post_small_2.push(item)
                }
              }
            }
          }
          if (el_add != null) {
            arr_temp_category_2.push(el_add);
          }
          break;
        case 3:
          if (arr_temp_category_3.length === 0) {
            el_add = <PostLargeRight data={item}/>;
          } else {
            if (arr_temp_category_3.length === 1) {
              el_add = <PostNormalItem data={item}/>;
            } else {
              if (arr_temp_category_3.length === 2) {
                el_add = <PostBasic data={item}/>
              } else {
                if (arr_temp_category_3.length !== 4) {
                  list_post_small_3.push(item)
                }
              }
            }
          }
          if (el_add != null) {
            arr_temp_category_3.push(el_add);
          }
          break;
        case 4:
          if (arr_temp_category_4.length === 0) {
            el_add = <PostLargeLeft data={item}/>;
          } else {
            if (arr_temp_category_4.length === 1) {
              el_add = <PostNormalItem data={item}/>;
            } else {
              if (arr_temp_category_4.length === 2) {
                el_add = <PostBasic data={item}/>
              } else {
                if (arr_temp_category_4.length !== 4) {
                  list_post_small_4.push(item)
                }
              }
            }
          }
          if (el_add != null) {
            arr_temp_category_4.push(el_add);
          }
          break;
        case 5:
          if (arr_temp_category_5.length === 0) {
            el_add = <PostLargeRight data={item}/>;
          } else {
            if (arr_temp_category_5.length === 1) {
              el_add = <PostNormalItem data={item}/>;
            } else {
              if (arr_temp_category_5.length === 2) {
                el_add = <PostBasic data={item}/>
              } else {
                if (arr_temp_category_5.length !== 4) {
                  list_post_small_5.push(item)
                }
              }
            }
          }
          if (el_add != null) {
            arr_temp_category_5.push(el_add);
          }
          break;
      }
    });

    arr_temp_category_1.push(<PostList data={list_post_small_1}/>);
    arr_temp_category_2.push(<PostList data={list_post_small_2}/>);
    arr_temp_category_3.push(<PostList data={list_post_small_3}/>);
    arr_temp_category_4.push(<PostList data={list_post_small_4}/>);
    arr_temp_category_5.push(<PostList data={list_post_small_5}/>);

    this.setState({list_post_with_category_1: await arr_temp_category_1});
    this.setState({list_post_with_category_2: await arr_temp_category_2});
    this.setState({list_post_with_category_3: await arr_temp_category_3});
    this.setState({list_post_with_category_4: await arr_temp_category_4});
    this.setState({list_post_with_category_5: await arr_temp_category_5});
  }

  render() {
    return (
      <div id="content">
        {/*  New post */}
        <section>
          <div className="container">
            <h5 className="title my-md-5">
              Tin Tức Mới
            </h5>

            <div className="row">

              {this.state.list_post_normal.length !== 0 && (
                <PostNormal data={this.state.list_post_normal}/>
              )}


              <div className="col-md-8">
                {this.state.post_large_random != null && (
                  <PostBig data={this.state.post_large_random}/>
                )}
              </div>

              <div className="col-md-4">
                {this.state.list_post_normal != null && (
                  <PostList data={this.state.list_post_small}/>
                )}
              </div>
            </div>
          </div>
        </section>
        {/*  /New post */}

        {/* Post with category */}
        <section>
          <div className="container">
            <hr/>
            <div id="category-1" className="post-dep-cate" data-cate="cate-1">
              {this.state.list_post_with_category_1[0]}
              <div className="row my-md-5">
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_1[1]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_1[2]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_1[3]}
                </div>
              </div>
            </div>

            <div id="category-2" className="post-dep-cate" data-cate="cate-2">
              {this.state.list_post_with_category_2[0]}
              <div className="row my-md-5">
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_2[1]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_2[2]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_2[3]}
                </div>
              </div>
            </div>

            <div id="category-3" className="post-dep-cate" data-cate="cate-3">
              {this.state.list_post_with_category_3[0]}
              <div className="row my-md-5">
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_3[1]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_3[2]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_3[3]}
                </div>
              </div>
            </div>

            <div id="category-4" className="post-dep-cate" data-cate="cate-4">
              {this.state.list_post_with_category_4[0]}
              <div className="row my-md-5">
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_4[1]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_4[2]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_4[3]}
                </div>
              </div>
            </div>

            <div id="category-5" className="post-dep-cate" data-cate="cate-5">
              {this.state.list_post_with_category_5[0]}
              <div className="row my-md-5">
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_5[1]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_5[2]}
                </div>
                <div className="col-md-4 mb-md-5 mr-xs-2">
                  {this.state.list_post_with_category_5[3]}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Post with category */}
      </div>
    );
  }
}

export default ContentHome