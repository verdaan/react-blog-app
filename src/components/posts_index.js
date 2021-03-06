import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'

class PostsIndex extends Component {

  componentDidMount() {
    // fetch posts from heroku blog API
    this.props.fetchPosts()
  }

  renderPosts() {
    // lodash map over
    const postsList = _.map(this.props.posts, (post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>

        </li>
      )
    })
    // return the list of <li>s to render
    return postsList
  }

  render() {
    // Link tag takes to prop with a route which specifies where it goes
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add Post
          </Link>
        </div>
        <h3> Posts </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // get posts from reducer
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
