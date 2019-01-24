import React from 'react';
import {connect} from 'react-redux'
import { fetchPost } from '../actions/index';
// PostList.js -> React-Redux (store.dispatch(fetchPost())) -> action/index.js
class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPost();
    }
  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, {fetchPost})(PostList);