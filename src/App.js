function App() {
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'},
    ]

    const loading = true

    if (loading) return <h1>Loading...</h1>
    
    
    return (
        <div className="'container">
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p> 

            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                     {comments.map((comments, index) => (
                         <li key={index}>{comments.text}</li>
                     ))}
                </ul>
            </div>
        </div>
    )
}

export default App