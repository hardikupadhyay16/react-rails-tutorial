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
        var auth_token = localStorage.getItem("auth_token");
        var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.post.title} /> : '';
        var description = this.state.editable ? <input type='text' ref= 'description' defaultValue={this.props.post.description} />: '';
        var edit_btn;
        var del_btn;
        if (auth_token) {
            edit_btn = <button className="btn btn-danger pull-right action-btn" onClick={this.props.handleDelete} >Delete</button>
            del_btn = <button className="btn btn-primary pull-right action-btn" onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
        }
        return (
            <div>
                {title}
                {description}
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        {this.props.post.title}
                        {edit_btn}
                        {del_btn}
                    </div>
                    <div className="panel-body">{this.props.post.description}</div>
                </div>
            </div>
        )
    }
});
