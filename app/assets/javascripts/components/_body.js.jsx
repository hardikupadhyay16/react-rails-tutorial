var Body = React.createClass({
    getInitialState() {
        return { posts: [] }
    },
    componentDidMount() {
        var auth_token = localStorage.getItem("auth_token");
        $.getJSON(`/posts.json?auth_token=${auth_token}`, (response) => { this.setState({ posts: response }) });
    },
    handleSubmit(post) {
        var newState = this.state.posts.concat(post);
        this.setState({ posts: newState })
    },
    handleDelete(id) {
        var auth_token = localStorage.getItem("auth_token");
        $.ajax({
            url: `/posts/${id}`,
            type: 'DELETE',
            dataType: 'json',
            data:{ auth_token: auth_token },
            success:() => { this.removeItemClient(id); }
        });
    },
    handleUpdate(post) {
        var auth_token = localStorage.getItem("auth_token");
        $.ajax({
            url: `/posts/${post.id}`,
            dataType: 'json',
            type: 'PUT',
            data: { post: post,auth_token: auth_token },
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
                <DestroySession/>
                <NewPost handleSubmit={this.handleSubmit}/>
                <AllPosts posts={this.state.posts} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
});