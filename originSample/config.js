/**
 * Created by Administrator on 2015/4/29.
 */
module.exports = function(){
    return {
        root  : 'E:/git/node-server/webapp',
        index : 'index.html',
        log   : {
            dir      : './log',
            fileSize : 1024 * 1024 * 10,
            daily    : true
        }
    };
}();