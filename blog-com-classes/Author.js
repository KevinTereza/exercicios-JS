/*
3. Criar a classe Author
   - Ter propriedades: name (nome do autor) e posts (array vazio).
   - Criar o método createPost(title, content) que:
     a) Cria um novo Post com o autor atual.
     b) Adiciona o Post criado no array posts.
     c) Retorna o Post criado.
*/

const Post = require("./Post")

class Author {
    constructor(name) {
        this.name = name,
        this.posts = []
    }

    createPost(title, content) {
        const post = new Post(title, content, this)
        this.posts.unshift(post)
        return post
    }
}

module.exports = Author