var restify = require('restify');
var partition = require('./partition/index');

var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.requestLogger());
server.use(restify.bodyParser());
server.listen(8101, function () {
    console.log('');
    console.log('');
    console.log('Mock Server is Started at 8101!!!');
    console.log('');
    console.log('');
});
partition(server);
