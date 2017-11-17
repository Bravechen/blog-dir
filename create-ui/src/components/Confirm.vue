<style lang="scss" scoped>
    @import '../common/ui.scss';

    .confirm{
        @extend %layer;

        .confirm__cnt{
            overflow: hidden;
            width: $confirm-width;
            background:$confirm-bg-color;
            border-radius:5px;
            box-shadow: $confirm-box-shadow;

            .confirm__title{
                height:40px;

                margin:0;
                font-size:$confirm-header-fontSize;
                color:$confirm-header-fontColor;
                line-height: 2.4;
                font-family: $ui-fontFamily;
                font-weight: normal;

                box-sizing:border-box;
                padding-left:10px;

                background:$confirm-header-bg-color;
            }

            .confirm__cnt-box{
                width:92%;
                min-height:40px;
                margin:16px auto;
                overflow:hidden;

                font-size:$confirm-cnt-fontSize;
                color:$confirm-cnt-fontColor;
                word-break: break-all;
                background:$confirm-cnt-bgColor;

                display: flex;
                align-items: center;
                justify-content: $confirm-cnt-textAlign;
            }

            .confirm__btn-box{
                width:100%;
                height:$confirm-btn-boxHeight;
                font-size:0;

                background:$confirm-btn-box-bgColor;
                box-sizing: border-box;
                border-top:$confirm-btn-box-top-border;

                display: flex;

                .confirm__btn{
                    display: inline-block;
                    flex:1;
                    height:$confirm-btn-boxHeight;

                    background:$confirm-btn-bgColor;
                    box-sizing: border-box;

                    vertical-align: middle;
                    text-align: center;
                    font-size:$confirm-btn-fontSize;
                    color:$confirm-btn-fontColor;
                    line-height:$confirm-btn-lineHeight;

                    &:nth-child(2){
                        border-left:$confirm-btn-box-top-border;
                    }

                    &:hover{
                        background-color:$confirm-btn-bgColor--hover;
                        color:$confirm-btn-fontColor--hover;
                    }
                }
                a.confirm__btn{
                    text-decoration:none;
                }
            }
        }
    }
</style>
<template>
    <div v-show="useConfirm" class="confirm" :class="{'layer--show':showing}">
        <div class="confirm__cnt">
            <h3 class="confirm__title" >{{confirmData.title}}</h3>
            <div
                class="confirm__cnt-box"
                v-if="!confirmData.useHtml"  >{{confirmData.content}}</div>

            <div
                class="confirm__cnt-box"
                v-else
                v-html="confirmData.html" ></div>

            <div class="confirm__btn-box" @click.stop.prevent="onBtnTapHandler" >
                <a
                    data-type="onCancelTap"
                    v-if="confirmData.showCancel"
                    href="javascript:;"
                    class="confirm__btn cancel-btn" >{{confirmData.cancelText}}</a>
                <a
                    data-type="onConfirmTap"
                    href="javascript:;"
                    class="confirm__btn confirm-btn">{{confirmData.confirmText}}</a>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import UM from '../common/UIManager';

export default {
    data(){
        return {
            showing:false,
        };
    },
    computed:{
        ...mapGetters([
            'confirmData',
            'useConfirm'
        ]),
    },
    created(){},
    updated(){
        if(this.useConfirm && !this.showing){
            const that = this;
            let timer = setTimeout(function(){
                clearTimeout(timer);
                that.showing = true;
            },100);
        }
        if(!this.useConfirm && this.showing){
            this.showing = false;
        }
    },
    methods:{
        onBtnTapHandler(e){
            let target = e.target;
            if(!target || !target.dataset || !target.dataset.type){
                return;
            }
            let type = target.dataset.type;
            let fn = this[type];
            if(fn && typeof fn === 'function'){
                fn.call(this);
            }
        },
        onCancelTap(){
            console.log("cancel confirm");
            UM._fireConfirm(false);
        },
        onConfirmTap(){
            console.log("confirm confirm");
            UM._fireConfirm(true);
        },
    }
}
</script>

