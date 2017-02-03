var LocationSearch = React.createClass({
    getInitialState() {
        return { posts: [] }
    },
    handleSearch() {
        var location = this.refs.location.value;
        $.ajax({
            url: 'posts',
            dataType: 'json',
            type: 'GET',
            data: { location: location },
            success: (response) => {
                this.setState({ posts: response })
            },
            error(response) {
                console.log(response)
            }
        });
    },
    render() {
        return (
            <div id="locationField">
                <div className="mrg-bottom">
                    <div className="input-group">
                        <input ref="location" id="autocomplete" type="text" onFocus={geolocate()} className="form-control" placeholder="Search location..."/>
                          <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.handleSearch}>Search!</button>
                          </span>
                    </div>
                </div>
                <AllPosts posts={this.state.posts}/>
            </div>
        )
    }
});
