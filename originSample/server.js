/**
 * Created by Administrator on 2015/4/29.
 */
var http = require('http');
var url  = require('url');
var fs   = require('fs');
var path = require('path');
var util = require('util');
var config = function(){
    if (fs.existsSync('config.js')) {
        return require('./config.js');
    } else {
        throw new Error('config.js is not found of current directory');
    }
}();
console.log(config);
config = config || {
    root  : './webapp',
    index : 'index.html',
    log   : {
        dir      : '/log',
        fileSize : 1024 * 1024 * 10,
        daily    : true
    }
};
var code_message = {
    200 : 'ok',
    304 : 'not modified',
    404 : 'resource is not found on server',
    400 : 'bad request',
    500 : '',
    503 : ''
}

function page404(){
    return "<html><head><title>404</title></head><body>Page is not found</body></html>";
}
function page500(){

}
http.createServer(function(req, res){
    console.log('request in server');
    var url = req.url;
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    fs.readFile(config.root + '/' + config.index, function(err, data){
        if (err) {
            res.write(page404());
        } else {
            res.write(data);
        }
        res.end();
    });
    return res;
}).listen(1337, '127.0.0.1');
console.log('server is started');
