var AllPosts = React.createClass({

    getInitialState() {
        return { posts: [] }
    },
    componentDidMount() {
        $.getJSON('/posts.json', (response) => { this.setState({ posts: response }) });
    },
    render() {
        var posts = this.state.posts.map((post) => {
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            )
        });
        return(
            <div> {posts} </div>
        )
    }
});
