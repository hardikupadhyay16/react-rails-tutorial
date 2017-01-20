var AllPosts = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    render() {
        var posts = this.props.posts.map((post) => {
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <button onClick={this.handleDelete.bind(this, post.id)}>Delete</button>
                </div>
            )
        });
        return(
            <div> {posts} </div>
        )
    }
});
