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
    handleUpdate(post) {
        $.ajax({
            url: `/posts/${post.id}`,
            dataType: 'json',
            type: 'PUT',
            data: { post: post },
            success: () => {
                this.updateItems(post);
            }
        })
    },
    updateItems(post) {
        console.log(post)

        var posts = this.state.posts.filter((i) => { return i.id != post.id });
        posts.push(post);
        this.setState({posts: posts });
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
                <AllPosts posts={this.state.posts} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
});