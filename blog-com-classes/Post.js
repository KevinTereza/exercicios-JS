class Post {
    constructor(title, content, author) {
        this.title = title,
        this.content = content,
        this.author = author,
        this.comments = []
    }

    addComment(comment) {
        this.comments.unshift(comment)
    }
}

module.exports = Post