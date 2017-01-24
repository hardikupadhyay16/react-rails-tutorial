var LocationSearch = React.createClass({
    getInitialState() {
        return { errors: {} }
    },

    render() {
        return (
            <div id="locationField">
                <div>
                    <div className="input-group">
                        <input id="autocomplete" type="text" onFocus='geolocate()' className="form-control" placeholder="Search location..."/>
                          <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">Search!</button>
                          </span>
                    </div>
                </div>
            </div>
        )
    }
});
