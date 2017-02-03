var NewPost= React.createClass({
    getInitialState() {
        return { errors: {} }
    },
    handleClick() {
        var title = this.refs.title.value;
        var description = this.refs.description.value;
        var location = this.refs.location.value;
        var that = this;
        var auth_token = localStorage.getItem("auth_token");
        $.ajax({
            url: 'posts',
            dataType: 'json',
            type: 'POST',
            data: { post: { title: title, description: description,location: location },auth_token: auth_token },
            success: (response) => {
                this.props.handleSubmit(response);
                this.refs.title.value = '';
                this.refs.description.value = '';
                this.refs.location.value = '';
                that.setState({errors: {}})
            },
            error(response) {
                that.setState({errors: response.responseJSON})
            }
        });
    },

    render() {
        return (
            <div>
                <div className="form-group">
                    <input ref='title' placeholder='Enter Title of the post' className="text form-control"/>
                    <span style={{color: 'red'}}>{this.state.errors.title}</span>
                </div>
                <div className="form-group">
                    <input ref='description' placeholder='Enter description of the post' className="text form-control"/>
                    <span style={{color: 'red'}}>{this.state.errors.description}</span>
                </div>
                <div className="form-group">
                    <input ref="location" id="autocomplete" type="text" onFocus={geolocate()} className="form-control" placeholder="Search location..."/>
                </div>
                <button onClick={this.handleClick} className="btn btn-primary mrg-bottom">Submit</button>
            </div>
        )
    }
});
