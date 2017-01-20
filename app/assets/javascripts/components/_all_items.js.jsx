var AllItems = React.createClass({

    getInitialState() {
        return { comments: [] }
    },
    componentDidMount() {
        $.getJSON('/comments.json', (response) => { this.setState({ comments: response }) });
    },
    render() {
        var comments = this.state.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h3>{comment.author}</h3>
                    <p>{comment.text}</p>
                </div>
            )
        });
        return(
            <div> {comments} </div>
        )
    }
});
