import Display from './Display.js';

export default class Shape extends Display{
    constructor(){
        super();
        this._graphics = null;
    }

    get graphics(){
        return this._graphics;
    }
}