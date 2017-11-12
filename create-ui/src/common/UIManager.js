const noop = function(){};

//=====================================================
const ORIGIN_CONFIRM = {
    title:'注意',
    useHtml:false,
    content:'',
    html:'',
    showCancel:true,
    cancelText:'取消',
    confirmText:'确定',
    success:noop,
    fail:noop,
};

class ConfirmOpt{
    constructor(){
        this.opt = Object.assign({},ORIGIN_CONFIRM);
    }
    reset(opt){
        if(!opt){
            return;
        }
        let o = Object.assign({},ORIGIN_CONFIRM);
        o.title = opt.title || o.title;
        o.content = opt.content || o.content;
        o.html = opt.html;
        if(o.html){
            o.useHtml = true;
        }

        o.confirmText = opt.confirmText || o.confirmText;
        if(typeof opt.success === 'function'){
            o.success = opt.success;
        }

        o.showCancel = typeof opt.showCancel === 'boolean'?opt.showCancel:o.showCancel;
        if(o.showCancel){
            o.cancelText = opt.cancelText || o.cancelText;
            if(typeof opt.fail === 'function'){
                o.fail = opt.fail;
            }
        }



        this.opt = o;
    }
}
//==========================================================
const ORIGIN_MESSAGE = {
    content:'',
    duration:3000,  //3秒
};

class MessageOpt{
    constructor(){
        this.opt = Object.assign({},ORIGIN_MESSAGE);
    }
    reset(opt){
        let o = Object.assign({},ORIGIN_MESSAGE);
        o.content = opt.content || o.content;
        o.duration = Number.isSafeInteger(opt.duration)?opt.duration:o.duration;
        this.opt = o;
    }
}
//==============================================================
const ORIGIN_LOADING = {
    content:'',
    mask:false,
    url:'',
};

class LoadingOpt{
    constructor(){
        this.opt = Object.assign({},ORIGIN_LOADING);
    }
    reset(opt){
        let o = Object.assign({},ORIGIN_LOADING);
        o.content = opt.content || o.content;
        o.mask = !!opt.mask;
        o.url = opt.url || o.url;
        this.opt = o;
    }
}
//=================================================================
let confirm;
let message;
let loading;
let _store;
let initialized = false;
//=================================================================
export default {
    /**
     * 
     * @param {*} agree 
     */
    _fireConfirm(agree){
        if(agree){
            confirm.opt.success();
        }else{
            confirm.opt.fail();
        }
        this.hideConfirm();
    },
    /**
     * 
     * @param {*} fn 
     */
    _existedTimer(fn){
        let that = this;
        let start = new Date().valueOf();
        requestAnimationFrame(check);

        function check(){
            let now = new Date().valueOf();
            if(now - start >= message.opt.duration){
                fn();
            }else{
                requestAnimationFrame(check);
            }
        }
    },
    /**
     * 
     * @param {*} store 
     */
    initialize(store){
        if(store){
            _store = store;
            initialized = true;
            console.log(_store);
        }
    },
    /**
     * 
     * @param {*} opt 
     */
    showConfirm(opt){
        if(!initialized){
            return;
        }
        confirm = confirm || new ConfirmOpt();
        confirm.reset(opt);
        _store.dispatch('setConfirm',{
            using:true,
            opt:confirm.opt,
        });
    },
    /**
     * 
     */
    hideConfirm(){
        if(!initialized || !confirm){
            return;
        }

        let timer = setTimeout(function(){
            clearTimeout(timer);
            confirm.reset(ORIGIN_CONFIRM);
            _store.dispatch('setConfirm',{
                using:false,
                opt:confirm.opt,
            });
        },500);
    },
    /**
     * 
     * @param {*} opt 
     */
    showMessage(opt){
        if(!initialized){
            return;
        }
        message = message || new MessageOpt();
        message.reset(opt);
        _store.dispatch('setMessage',{
            using:true,
            opt:message.opt,
        });

        this._existedTimer(()=>{
            this.hideMessage();
        });
    },
    /**
     * 
     */
    hideMessage(){
        if(!initialized){
            return;
        }

        message.reset(ORIGIN_MESSAGE);
        _store.dispatch('setMessage',{
            using:false,
            opt:message.opt,
        });
    },
    /**
     * 
     * @param {*} opt 
     */
    showLoading(opt){
        if(!initialized){
            return;
        }
        loading = loading || new LoadingOpt();
        loading.reset(opt);
        _store.dispatch('setLoading',{
            using:true,
            opt:loading.opt,
        });
    },
    /**
     * 
     */
    hideLoading(){
        if(!initialized){
            return;
        }
        loading.reset(ORIGIN_LOADING);
        _store.dispatch('setLoading',{
            using:false,
            opt:loading.opt,
        });
    },
};
