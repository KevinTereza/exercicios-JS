const Author = require("./Author")
const Comment = require("./Comment")
const Post = require("./Post")

const kevin = new Author("Kevin Tereza")
const john = new Author("John Doe")

const newPost = kevin.createPost("Classes e objetos em JavaScript", "Lorem ipsum dolor sit amet, consectetur.")
const newComment = new Comment(john, "Muito interessante!")
newPost.addComment(newComment)

const text = `
${newPost.title}
"${newPost.content}"
— ${newPost.author.name}

Comentários:
${newPost.comments.map(comment => `${comment.author.name}: "${comment.content}"`).join(`\n`)}
` // Cria um novo array de strings contendo o nome e conteudo do comentario. Join separa os comentarios em linhas unicas próprias

console.log(text)