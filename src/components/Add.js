import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import *  as actions from '../redux/actions/index' /* el * se lee como "todo" */

const Add = ({ title, excerpt, content, author, updateTitle, updateExcerpt, updateContent, updateAuthor, updatePosts}) => {
  return(
    <div className="row justify-content-center my-5">
      <div className="col-8">
        <div className = "card bg-light">
          <div className="card-body">
            <div className ="card-body">
              <h3 className= "card-title text-center">New Post</h3>

              <div className = "form-group">
                <input 
                className="form-control" 
                placeholder = "write your title here..." 
                value = {title}
                onChange = {e => updateTitle(e.target.value)} />
              </div>
              
              <div className = "form-group">
                <textarea 
                className="form-control" 
                placeholder="write your excerpt here..."
                col="3"
                value = {excerpt}
                onChange = {e => updateExcerpt(e.target.value)} ></textarea>
              </div>

              <div className = "form-group">
                <textarea 
                className="form-control" 
                placeholder="write your content here..."
                col="3" 
                value = {content}
                onChange = {e => updateContent(e.target.value)}></textarea>
              </div>

              <div className = "form-group">
                <input className = "form-control" placeholder = "Who are you?" 
                value = {author}
                onChange = {e => updateAuthor(e.target.value)}/>
              </div>

              <button className = "btn btn-primary"
              onClick = {() =>  updatePosts()} >Save</button>
              <Link to ="/home" className="btn btn-secondary">Cancel</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({post}) => {
  const { title, excerpt, content, author, created } = post.post
  return { title, excerpt, content, author, created }
}
export default connect(mapStateToProps, actions) (Add) /* currying closures */