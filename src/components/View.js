import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const validate = (itemVerified) => {
  if(!isNaN(itemVerified)) {
    return itemVerified
  }
};

const View = ({posts, match }) => {
  
  let result = posts.filter(post => validate(post.created) == validate(match.params.id));
  console.log(result[0]);
  
  return (
    <div> 
      <div className="card bg-dark col-md-12 m-4 justify-content-center">
        <div>
          <div className="title text-white"> {result[0].title} </div>
        </div>
        <div>
          <div className="content text-white"> {result[0].content} </div>
        </div>
        <div>
          <div className = "author text-muted" > {result[0].author}</div> 
        </div>    
      </div>
      <Link to = {`/edit/${result[0].created}`}>Edit</Link>
    </div>
  )
}

const mapStateToProps = ({post}) => {
  const { posts } = post
  return { posts }
}

export default connect (mapStateToProps, null) (View)