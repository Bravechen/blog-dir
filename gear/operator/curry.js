
let curry = function(fn) {
    if (typeof fn !== 'function') {
        return () => {};
    }
    
    let len = fn.length;
    let params = [];
    let r = function(...args) {
        params = params.concat(args);
        if(params.length >= len){
            args = params;
            params = [];
            return fn.apply(this,args);
        }
        return r;
    };
    
    return r;
};

export default curry;