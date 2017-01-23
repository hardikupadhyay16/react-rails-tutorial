var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var Main = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-md-9">

                </div>
                <div className="col-md-3">
                    <NewSession />
                    <NewUser />
                </div>
            </div>
        )
    }
});