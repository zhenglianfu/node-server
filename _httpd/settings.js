/**
 * Created by zhenglianfu on 2015/6/13.
 *
 */

// node server ÅäÖÃÎÄ¼ş
module.exports = function(){
    // server config
    var server = {
        link : './server.js',   // server.js detail settings
        port : 1337,
        host : 'localhost'
    };
// database config <coming soon>
    /*var source = {

     }*/

    var view = {
        filter : '*.json',
        index  : 'index.html',
        error  : {
            404 : '',
            500 : '',
            '*' : ''
        }
    }

// request mapping
    var requestMapping = {
        '/user'  : '/control/user.js',
        '/admin' : '/control/admin.js'
    }
    return {
        view    : view,
        mapping : requestMapping,
        server  : server
    }
};