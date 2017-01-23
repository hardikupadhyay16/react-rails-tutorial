var NewSession= React.createClass({
    getInitialState() {
        return { errors: {} }
    },

    handleClick() {
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var that = this;
        $.ajax({
            url: 'sessions',
            dataType: 'json',
            type: 'POST',
            data: { user: {email: email, password: password} },
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
                <div className="row">

                    <span style={{color: 'red'}}>{this.state.errors.error}</span>

                    <div className="form-group">
                        <input ref='email' placeholder='Enter your Email' className="text form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="password" ref='password' placeholder='Enter password' className="text form-control"/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Login</button>
                </div>
            </div>
        )
    }
});
