const METHOD = 'method';
const ATTRIBUTE = 'attr';

class CommandItem{
    constructor(type,action,params){
        this.type = type;
        this.action = action;
        this.params = params;
    }
    execute(ctx){
        //override by subclass
        throw new Error('In Graphics CommandItem execute(),this method must be override by subclass');
    }
    saveify(){
        return {
            type:this.type,
            action:this.action,
            params:this.params,
        };
    }
}


class AttrCommand extends CommandItem{
    constructor(attr='',value=''){
        super(ATTRIBUTE,attr,value);
    }
    execute(ctx){
        if(this.action in ctx){
            ctx[this.action] = this.params;
        }
    }
}

function noop(){}


class MethodCommand extends CommandItem{
    constructor(method='noop',params=[]){
        super(METHOD,method,params);
    }
    execute(ctx){
        let fn = ctx[this.method];
        if(fn && typeof fn === 'function'){
            fn.apply(ctx,params);
        }
    }
}
//============================================================
export default {
    AttrCommand,
    MethodCommand,
};