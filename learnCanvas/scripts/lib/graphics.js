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

//============================================================
export class MethodCommand extends CommandItem{
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

export class Graphics{
    constructor(ctx){
        this.ctx = ctx;
    }
    /**
     * 绘制一条从一点到另一点的直线
     * @param {*} ox 
     * @param {*} oy 
     * @param {*} tx 
     * @param {*} ty 
     * @param {*} opt 
     */
    line(ox,oy,tx,ty,opt){}

    /**
     * 绘制一条贯串多个点的直线路径
     * @param {*} points 
     * @param {*} opts 
     */
    linesPath(points,opts){}
    
    /**
     * 绘制从一个点到另一个点的曲线
     * @param {*} cx 
     * @param {*} cy 
     * @param {*} ox 
     * @param {*} oy 
     * @param {*} opt 
     */
    curve(cx,cy,ox,oy,tx,ty,opt){}

    /**
     * 绘制贯串多个点的曲线
     * @param {*} curvePoints 
     * @param {*} opts 
     */
    curvesPath(points,ctrlPoins,opts){}

    /**
     * 绘制一个圆
     * @param {*} cx 
     * @param {*} cy 
     * @param {*} radius 
     * @param {*} opt 
     */
    circle(cx,cy,radius,opt){}

    /**
     * 绘制一个矩形
     * @param {*} x 
     * @param {*} y 
     * @param {*} width 
     * @param {*} height 
     * @param {*} opt 
     */
    rect(x,y,width,height,opt){}

    /**
     * 绘制一个三角形
     * @param {*} points 
     * @param {*} opt 
     */
    triangle(points,opt){}

    /**
     * 绘制一条由多个绘制命令组成的路径
     * @param {*} commandList 
     */
    path(commandList){}

}