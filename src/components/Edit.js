import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import *  as actions from '../redux/actions/index' /* el * se lee como "todo" */

class Edit extends Component {

  componentDidMount() {
    let {
      posts, match, updateTitle, updateExcerpt, 
      updateContent, updateAuthor
    } = this.props

    console.log(match.params.id)//Aqui se imprime el ID sin problema

    let result = posts.find(post => post.created === parseInt(match.params.id ));//esto localiza el id del post en cuestion
    updateTitle(result.title)
    updateExcerpt(result.excerpt)
    updateContent(result.content)
    updateAuthor(result.author)
  }

  render() {
    let {
      title, excerpt, content, 
      author, created, updateTitle, updateExcerpt, 
      updateContent, updateAuthor, saveUpdate,
   } = this.props
  
    return (
      <div className="row justify-content-center my-5">
        <div className="col-8">
          <div className = "card bg-light">
            <div className="card-body">
              <div className ="card-body">
                <h3 className= "card-title text-center">New Post</h3>
                <div className = "form-group">
                  <input 
                  className="form-control" 
                  value = {title}
                  onChange = {e => updateTitle(e.target.value)} />
                </div>
              
                <div className = "form-group">
                  <textarea 
                  className="form-control" 
                  col="3"
                  value = {excerpt}
                  onChange = {e => updateExcerpt(e.target.value)} ></textarea>
                </div>

                <div className = "form-group">
                  <textarea 
                  className="form-control" 
                  col="3" 
                  value = {content}
                  onChange = {e => updateContent(e.target.value)}></textarea>
                </div>

                <div className = "form-group">
                  <input className = "form-control"
                  value = {author}
                  onChange = {e => updateAuthor(e.target.value)}/>
                </div>

                <div>{this.props.match.params.id}  </div>

                <button className = "btn btn-primary"
                  onClick = {() => saveUpdate()}> Update </button>
                <Link to = "/home" className = "btn btn-secondary"> Cancel </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  }



const mapStateToProps = ({post}) => {
  const { title, excerpt, content, author, created } = post.post
  const { posts } = post
  return { title, excerpt, content, author, posts, created }
}
export default connect(mapStateToProps, actions) (Edit) /* currying closures */