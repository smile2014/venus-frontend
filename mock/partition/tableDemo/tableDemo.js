var datas = require('./datas.json');

module['exports'] = function (server) {

    //===============================
    // table list
    //===============================
    server.get('/api/demo/table', function(req, res, next) {
        res.send(datas);
        next();
    });
};