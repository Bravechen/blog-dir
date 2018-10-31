
let curry = function(fn) {
    if (typeof fn !== 'function') {
        throw new TypeError('The param of curry should be expected function type.');
    }
    
    let len = fn.length;
    let o = function(params) {
        return function(...args) {
            let ary2 = params.concat(args);
            if(ary2.length >= len) {
                return fn.apply(this, ary2);
            }

            return o(ary2);
        };
    };
    
    return o([]);
};

export default curry;