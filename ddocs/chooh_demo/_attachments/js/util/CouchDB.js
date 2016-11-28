function CouchDbServer(url) {
    this._url = url;
}

CouchDbServer.Endpoint = {
    DB_LIST: '/_all_dbs'
};

CouchDbServer.prototype.listDatabases = function () {
    return $.ajax({
        url: this._url + CouchDbServer.Endpoint.DB_LIST,
        type: 'GET'
    });
};
