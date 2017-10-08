import {Graphics} from './graphics';

export class Polygon{
    constructor(graphics){
        this.graphics = graphics;
    }
    /**
     * 三次贝塞尔曲线
     * @param {*} cx1 
     * @param {*} cy1 
     * @param {*} cx2 
     * @param {*} cy2 
     * @param {*} ox 
     * @param {*} oy 
     * @param {*} tx 
     * @param {*} ty 
     * @param {*} opt 
     */
    cubeCurve(cx1,cy1,cx2,cy2,ox,oy,tx,ty,opt){}

    /**
     * 绘制贯串多个点的三次贝塞尔曲线
     * @param {*} ctrls 
     * @param {*} opts 
     */
    cubeCurvePath(ctrls,opts){} 

    /**
     * 绘制圆角矩形
     * @param {*} x 
     * @param {*} y 
     * @param {*} width 
     * @param {*} height 
     * @param {*} radius 
     * @param {*} opt 
     */
    roundRect(x,y,width,height,radius,opt){}

    /**
     * 绘制自定义圆角矩形
     * @param {*} x 
     * @param {*} y 
     * @param {*} width 
     * @param {*} height 
     * @param {*} opt 
     */
    customizableRoundRect(x,y,width,height,opt){}

    /**
     * 绘制圆角三角形
     * @param {*} points 
     * @param {*} radius 
     * @param {*} opt 
     */
    roundTriangle(points,radius,opt){}

    /**
     * 自定义圆角三角形
     * @param {*} points 
     * @param {*} opt 
     */
    customizableRoundTriangle(points,opt){}

    /**
     * 绘制五角星
     * @param {*} cx 
     * @param {*} cy 
     * @param {*} radius 
     * @param {*} opt 
     */
    fivePointsStar(cx,cy,radius,opt){}

    /**
     * 绘制圆角五角星
     * @param {*} cx 
     * @param {*} cy 
     * @param {*} radius 
     * @param {*} pointRadius 
     * @param {*} opt 
     */
    roundFivePointsStar(cx,cy,radius,pointRadius,opt){}

    /**
     * 绘制正多边形
     * @param {*} cx 
     * @param {*} cy 
     * @param {*} radius 
     * @param {*} vertexNum 
     * @param {*} opt 
     */
    regularPolygon(cx,cy,radius,vertexNum,opt){}
}