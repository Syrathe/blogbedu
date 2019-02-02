import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import *  as actions from '../redux/actions/index'

const Home = ({posts}) => {
  let list = posts.map(post =>{
    return (
      <div key = {post.created}> {/* El key se designa en el primer hijo de el return */}
        <div className="card bg-dark col-md-3 m-4 justify-content-center">
          <div>
            <div className="title text-white"> {post.title} </div>
          </div>
          <div>
            <div className="excerpt text-white"> {post.excerpt} </div>
          </div>
          <div>
            <div className = "author text-muted" > {post.author}</div> 
          </div> 
          <Link to = {`/view/${post.created}`} className="btn btn-secondary">View</Link>   
        </div>
      </div>
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