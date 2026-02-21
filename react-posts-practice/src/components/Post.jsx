function Post({name, text}) {
    return (
        <div className="post">
            <p className="post-author">{name}</p>
            <p className="post-text">{text}</p>
        </div>
    )
}

export default Post;