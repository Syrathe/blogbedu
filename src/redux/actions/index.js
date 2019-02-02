import {UPDATE_TITLE, UPDATE_EXCERPT, UPDATE_CONTENT, UPDATE_AUTHOR, UPDATE_POSTS} from './actionTypes'
import post from './'
/* Todas nuestras acciones van a ser objetos con estas propiedades
actions {
  type: UPDATE_TITLE,
  payload: "title",
} */

export const updateTitle = title => {
  return{
    type: UPDATE_TITLE,
    payload: title
  }
}

export const updateExcerpt = excerpt => {
  return{
    type: UPDATE_EXCERPT,
    payload: excerpt
  }
}

export const updateContent = content => {
 return{
    type: UPDATE_CONTENT,
    payload: content
  }
}

export const updateAuthor = author => {
  return{
     type: UPDATE_AUTHOR,
     payload: author
   }
 }

export const updatePosts = () => {
      return {
        type: UPDATE_POSTS,
        payload: null // esta accion no necesita que le pase nada al payload, por que el valor ya esta en el estado, con el resto de mi codigo.
      }
    }