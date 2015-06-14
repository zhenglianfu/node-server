/**
 * Created by zhenglianfu on 2015/6/13.
 */

/**
 * request Mapping
 */
module.exports = function(httpd){
    return {
        handlers : {
            '/' : {
                method  : httpd.GET,
                type    : httpd.JSON,
                handler : function(request){
                    return {};
                }
            },
            '/login.json' : {
                method  : httpd.POST,
                type    : httpd.JSON,
                handler : function(requets){
                    return {
                        result  : {},
                        success : true
                    }
                }
            }
        }
    }
};