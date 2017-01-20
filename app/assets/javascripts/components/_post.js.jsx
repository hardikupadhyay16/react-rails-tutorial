var Post = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        console.log('clicked');
        if(this.state.editable) {
            var title = this.refs.title.value;
            var id = this.props.post.id;
            var description = this.refs.description.value;
            var post = {id: id , title: title , description: description};
            this.props.handleUpdate(post);
        }
        this.setState({ editable: !this.state.editable })
    },
    render() {
        console.log(this.state.editable)
        var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.post.title} /> : '';
        var description = this.state.editable ? <input type='text' ref= 'description' defaultValue={this.props.post.description} />: '';
        return (
            <div>
                {title}
                {description}
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.description}</p>
                <button onClick={this.props.handleDelete} >Delete</button>
                <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
            </div>
        )
    }
});
