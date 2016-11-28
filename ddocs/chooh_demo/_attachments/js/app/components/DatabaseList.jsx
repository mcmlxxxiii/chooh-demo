class DatabaseList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            databases: []
        };
    }

    componentDidMount() {
        var component = this;
        app._couchServer.listDatabases().done(function (dbNames) {
            component.setState({
                databases: dbNames
            });
        });
    }

    render() {
        return (
            <div>
                Databases:
                <ul>
                    {this.state.databases.map(db => <li key={db}>{db}</li>)}
                </ul>
            </div>
        );
    }
}
