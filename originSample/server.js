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
    root  : 'E:/git/node-server/webapp',
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

}
function page500(){

}
http.createServer(function(req, res){
    console.log('request in server');
    var url = req.url;
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    res.write('welcome');
    res.end();
    return res;
}).listen(1337, '127.0.0.1');
console.log('server is started');
