var NewPost= React.createClass({
    handleClick() {
        var title = this.refs.title.value;
        var description = this.refs.description.value;
        $.ajax({
            url: 'posts',
            type: 'POST',
            data: { post: { title: title, description: description } },
            success: (response) => { console.log('it worked!', response); }
        });
    },

    render() {
        return (
            <div>
                <input ref='title' placeholder='Enter the name of the post' />
                <input ref='description' placeholder='Enter a post' />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});
