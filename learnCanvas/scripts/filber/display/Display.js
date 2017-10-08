import EventDispatcher from './EventDispatcher.js';

export default class Display extends EventDispatcher{
    constructor(){
        super();
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._commands = [];
        this._displayIndex = 0;
        this._nest = 1;
        this._parent = null;
        this._stage = null;
    }
    set x(value){
        this._x = value;
    }
    get x(){
        return this._x;
    }

    set y(value){
        this._y = value;
    }
    get y(){
        return this._y;
    }

    set width(value){
        this._width = value;
    }
    get width(){
        return this._width;
    }

    set height(value){
        this._height = value;
    }
    get height(){
        return this._height;
    }

    _draw(){}

    static _canUse(display){
        return display && display.uid;
    }
}