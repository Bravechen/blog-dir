import Display from './Display.js';

export default class DisplayContainer extends Display{
    constructor(){
        super();
        this._children = [];
    }

    get children(){
        return this._children;
    }

    addChild(display){
        let inList = this.hasChild(display);
        if(inList){
            return;
        }
        this._children[this._children.length] = display.uid;
    }
    hasChild(display){
        if(!display || !display.uid){
            return false;
        }
        let uid = display.uid;
        return this._children.indexOf(uid)>=0;
    }
    removeChild(display){
        let canUse = this.hasChild(display);
        if(!canUse){
            return;
        }
        let uid = display.uid;
        let index = this._children.indexOf(uid);
        this._children.splice(index,1);
    }
    addChildAt(index,display){
        if(!display || !display.uid){
            return false;
        }
    }
    removeChildren(){}
}