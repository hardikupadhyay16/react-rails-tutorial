var Body = React.createClass({
    getInitialState() {
        return { posts: [] }
    },
    componentDidMount() {
        $.getJSON('/posts.json', (response) => { this.setState({ posts: response }) });
    },
    handleSubmit(post) {
        var newState = this.state.posts.concat(post);
        this.setState({ posts: newState })
    },
    handleDelete(id) {
        $.ajax({
            url: `/posts/${id}`,
            type: 'DELETE',
            dataType: 'json',
            success:() => { this.removeItemClient(id); }
        });
    },
    removeItemClient(id) {
        var remainPost = this.state.posts.filter((post) => {
            return post.id != id;
        });
        this.setState({ posts: remainPost });
    },
    render() {
        return (
            <div>
                <NewPost handleSubmit={this.handleSubmit}/>
                <AllPosts posts={this.state.posts} handleDelete={this.handleDelete}/>
            </div>
        )
    }
});