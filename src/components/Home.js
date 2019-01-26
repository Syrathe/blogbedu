import React from 'react'
import {connect} from 'react-redux'
import *  as actions from '../redux/actions/index'

const Home = ({posts}) => {
  let list = posts.map(post =>{
    return (
      <div>{post.title}</div>
    )
  })

  return (
    <div>
      {list}
    </div>
  )
}

const mapStateToProps = ({post}) => {
  const { posts } = post
  return { posts }
}

export default connect (mapStateToProps, actions) (Home)