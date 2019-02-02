let posts = [
  {
    title: 'Titulo',
    excerpt: 'Extracto',
    content: 'Contenido',
    author: 'Autor', 
    created: 123,
  },
  {
    title: 'Titulo1',
    excerpt: 'Extracto1',
    content: 'Contenido1',
    author: 'Autor1', 
    created: 124,
  },
  {
    title: 'Titulo2',
    excerpt: 'Extracto2',
    content: 'Contenido2',
    author: 'Autor2', 
    created: 125,
  }
]

const result = posts.filter(post => post.created == 124 );
console.log(result[0]);

//aqui se debe guardar el obj con created 124