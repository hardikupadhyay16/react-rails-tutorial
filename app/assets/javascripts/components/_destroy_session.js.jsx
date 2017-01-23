var DestroySession= React.createClass({

    handleClick() {
        var auth_token = localStorage.getItem("auth_token");
        $.ajax({
            url: 'sessions/1',
            dataType: 'json',
            type: 'DELETE',
            data: { auth_token: auth_token },
            success: (response) => {
                localStorage.clear();
                window.location.reload();
            },
            error(response) {
            }
        });
    },

    render() {
        return (
            <div className="btn-logout">
                <button onClick={this.handleClick} className="btn btn-primary">LogOut</button>
                <br/>
            </div>
        )
    }
});
