import DisplayContainer from './DisplayContainer.js';

export default class Stage extends DisplayContainer{
    constructor(canvas){
        super();
        this._stageId = canvas.getAttribute('id') || this._uid;
        this._canvasElement = canvas;
        this._drawArea = canvas.getContext('2d');
    }
    get stageId(){
        return this._stageId;
    }

    addChild(display){}
    removeChild(display){}
    addChildAt(index,display){}
    removeChildren(){}

}