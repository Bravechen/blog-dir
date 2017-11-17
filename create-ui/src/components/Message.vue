<style lang="scss" scoped>
    @import '../common/ui.scss';

    .message{
        @extend %anmiate-layer;
        @extend %layer;

        .msg__cnt{
            width:$msg-width;
            min-height: $msg-cnt-minHeight;

            background:$msg-bgColor;
            box-shadow: $msg-boxShadow;
            box-sizing: border-box;
            border-radius: 5px;
            padding:10px;

            font-size:$msg-cnt-fontSize;
            color:$msg-cnt-fontColor;
            white-space: normal;
            word-break: break-all;

            display:flex;
            align-items: center;
            justify-content: $msg-cnt-textAlign;
        }
    }
</style>
<template>
    <div
        v-show="useMessage"
        class="message"
        :class="{'layer--show':showing}"
        @click.stop.prevent="onMsgTap"
        data-type="onCloseMsg" >

        <div class="msg__cnt" >{{messageData.content}}</div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  data(){
      return{
          showing:false,
      };
  },
  computed:{
      ...mapGetters([
          'useMessage',
          'messageData',
      ]),
  },
  updated(){
      if(this.useMessage && !this.showing){
          const that = this;
          let timer = setTimeout(function(){
              clearTimeout(timer);
              that.showing = true;
          },100);
      }

      if(!this.useMessage && this.showing){
          this.showing = false;
      }
  },
  methods:{
      onMsgTap(e){
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
      onCloseMsg(){

      }

  }
}
</script>
