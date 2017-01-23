var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
    <Route handler={Main}>
        <DefaultRoute handler={Main} />
        <Route handler={AllPosts} path='posts'/>
    </Route>
);