import util from '../utils/util.js';

export default class FBObject{
    constructor(){
        this._uid = util.getUID();
    }
    get uid(){
        return this._uid; 
    }
    clearDone(){}
    destroy(){}
}