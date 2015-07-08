/**
 * util.js
 * */
module.exports = function(){
    var _ = {
        extend : function(){
            var target = arguments[0],
                len = arguments.length,
                deep = false,
                copy,
                i = 1,
                k,
                item;
            if (typeof target === 'boolean') {
                deep = target;
                target = arguments[1];
                i++;
            }
            for (; i < len; i ++) {
                if ((copy = arguments[i]) != null) {
                    for (k in copy) {
                        item = copy[k];
                        if (deep && item && typeof item === 'object') {
                            if (Array.isArray(item)) {
                                target[k] = _.extend(deep, [], item);
                            } else {
                                target[k] = _.extend(deep, {}, item);
                            }
                        } else if (item) {
                            target[k] = item;
                        }
                    }
                }
            }
            return target;
        }
    };
    return _;
}();