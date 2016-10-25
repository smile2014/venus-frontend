var datas = require('./datas.json');

module['exports'] = function (server) {

    //===============================
    // table list
    //===============================
    server.get('/api/tables', function(req, res, next) {
        res.send(datas);
        next();
    });
};