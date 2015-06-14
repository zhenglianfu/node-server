/**
 * Created by Administrator on 2015/4/29.
 */
module.exports = function(){
    return {
        port  : 1337,
        host  : 'localhost',
        root  : './webapp',
        index : 'index.html',
        log   : {
            dir      : './log',
            fileSize : 1024 * 1024 * 10,
            daily    : true
        }
    };
}();