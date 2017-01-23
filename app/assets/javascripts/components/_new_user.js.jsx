var NewUser= React.createClass({
    getInitialState() {
        return { errors: {} }
    },
    handleClick() {
        var name = this.refs.name.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var password_confirmation = this.refs.password_confirmation.value;
        var that = this;
        $.ajax({
            url: 'users',
            dataType: 'json',
            type: 'POST',
            data: { user: { name: name, email: email, password: password, password_confirmation: password_confirmation } },
            success: (response) => {
                localStorage.setItem("auth_token", response.auth_token);
                window.location.reload();
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
                    <input ref='name' placeholder='Enter Name' className="text form-control"/>
                    <span style={{color: 'red'}}>{this.state.errors.name}</span>
                </div>
                <div className="form-group">
                    <input ref='email' placeholder='Enter your Email' className="text form-control"/>
                    <span style={{color: 'red'}}>{this.state.errors.email}</span>
                </div>
                <div className="form-group">
                    <input type="password" ref='password' placeholder='Enter password' className="text form-control"/>
                    <span style={{color: 'red'}}>{this.state.errors.password}</span>
                </div>
                <div className="form-group">
                    <input type="password" ref='password_confirmation' placeholder='Enter password confirmation' className="text form-control"/>
                    <span style={{color: 'red'}}>{this.state.errors.password_confirmation}</span>
                </div>
                <button onClick={this.handleClick} className="btn btn-primary">Submit</button>
            </div>
        )
    }
});
