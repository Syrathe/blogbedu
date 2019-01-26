import { UPDATE_TITLE, UPDATE_EXCERPT, UPDATE_CONTENT, UPDATE_AUTHOR, UPDATE_POSTS } from '../actions/actionTypes'


const INITIAL_STATE={
  post: {
    title: '',
    excerpt: '',
    content: '',
    author: '',
  },
  posts:[],
}

export default (state = INITIAL_STATE, action)=>{ /* Esto solo va a asignar el valor por default cuando no existe un valor definido previamente */
  
  let { post, posts } = state
  switch (action.type) { 

    case UPDATE_TITLE :
      post.title = action.payload
      return { ...state, post }

    case UPDATE_EXCERPT :
      post.excerpt = action.payload
      return { ...state, post }

    case UPDATE_CONTENT :
      post.content = action.payload
      return { ...state, post }

    case UPDATE_AUTHOR :
      post.author = action.payload
      return { ...state, post }  

    case UPDATE_POSTS :
      posts.push(post)
      post = {
        title:'',
        excerpt:'',
        content:'',
        author:''
      }
      return {...state, post, posts}
    default:
      return state
    
  }
}