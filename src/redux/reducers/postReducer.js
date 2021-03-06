import { UPDATE_TITLE, UPDATE_EXCERPT, UPDATE_CONTENT, UPDATE_AUTHOR, UPDATE_POSTS, SAVE_UPDATE } from '../actions/actionTypes'

const INITIAL_STATE={
  post: {
    title: '',
    excerpt: '',
    content: '',
    author: '',
    created:'',
  },
  posts:[],
}

export default (state = INITIAL_STATE, action)=>{ /* Esto solo va a asignar el valor por default cuando no existe un valor definido previamente */
  
  let { post, posts } = state
  switch (action.type) { 

    case SAVE_UPDATE :
      //crear un ciclo for que compare el key y cuente para calcular el indice, al cual le haremos pop
      
      post.created = Date.now()
        if (post.title.length && post.title && post.excerpt.length && post.excerpt && post.content.length && post.content && post.author.length && post.author){
          
          posts.push( post )
          //posts.push(post) //hACE FALTA ENCARGARME DE QUE SE REEMPLACE EL POST, NO sE GUARDE UNO NUEVO
          post = {
            title:'',
            excerpt:'',
            content:'',
            author:'', //Esto lo que hace es limpiar los campos de los inputs.
          }

        }
        
      return { ...state, post }
      
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
      if (post.title.length && post.title && post.excerpt.length && post.excerpt && post.content.length && post.content && post.author.length && post.author){
        post.created = Date.now()         //aqui se tiene que declarar el created, antes del push.
          posts.push(post)
            post = {
            title:'',
            excerpt:'',
            content:'',
            author:'',
            created:'',                      //Esto lo que hace es limpiar los campos de los inputs.
          }
        }//Aqui no se puede declarar el created por que esto limpia el estado.
      return {...state, post, posts}
    default:
      return state
  }
}