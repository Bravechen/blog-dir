

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