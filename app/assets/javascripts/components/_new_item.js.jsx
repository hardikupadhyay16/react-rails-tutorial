var NewItem= React.createClass({
    handleClick() {
        var author = this.refs.author.value;
        var text = this.refs.text.value;
        $.ajax({
            url: 'comments',
            type: 'POST',
            data: { comment: { author: author, text: text } },
            success: (response) => { console.log('it worked!', response); }
        });
    },

    render() {
        return (
            <div>
                <input ref='author' placeholder='Enter the name of the author' />
                <input ref='text' placeholder='Enter a comment' />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});
