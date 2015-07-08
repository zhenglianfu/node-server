/**
 * module of my node web framework 'node-server'
 *
 * */

// utils
var Util = {};

/* export to node */
module.exports = function(){
    var http = require('http'),
        path = require('path'),
        fs   = require('fs'),
        util = require('./util.js'),
        httpd = function(){
            return httpd.createServer();
        };
    util.extend(httpd, {
        createServer : function(port, host){
            port = port || '1337';
            host = host || 'localhost';
            var server = new httpd();
            server.port = port;
            server.host = localhost;
            return server;
        },
        GET    : 'get',
        POST   : 'post',
        HTML   : 'text/html',
        PLAIN  : 'text/plain',
        JSON   : 'application/json',
        STREAM : 'application/stream'
    });
    return {
        version : '1.0',
        author : 'zhenglianfu',
        httpd  : httpd
    };
}();