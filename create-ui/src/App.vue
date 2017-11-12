<style lang="scss">
  .btn-box{
    width:100%;
    height: 48px;

    box-sizing: border-box;
    padding:10px;
    background:#f5f5f5;

    display: flex;
    align-items:center;
    justify-content: center;
    .btn{
      height:36px;
      display:inline-block;
      flex:1;

      box-sizing: border-box;
      border:none;
      border-radius: 5px;

      background:#22a86d;
      color:#ffffff;

      margin-right:4px;
      outline:none;

      &:last-child{
        margin-right:0;
      }

      &:hover{
        background:#5cb78e;
      }
    }
  }

</style>

<template>
  <main id="app">
   <section class="btn-box" @click="onBtnTapHandler" >
     <button class="btn" data-type="openConfirm">打开Confirm</button>
     <button class="btn" data-type="openMessage">打开Message</button>
     <button class="btn" data-type="openLoading">打开Loading</button>
     <button class="btn" data-type="closeLoading">关闭Loading</button>
   </section>
   <confirm></confirm>
   <msg></msg>
   <loading></loading>
  </main>
</template>

<script>
import UM from './common/UIManager';
import Confirm from './components/Confirm';
import Message from './components/Message';
import Loading from './components/Loading';

export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  created(){
    UM.initialize(this.$store);
  },
  components:{
    'confirm':Confirm,
    'msg':Message,
    'loading':Loading,
  },
  methods:{
    onBtnTapHandler(e){
      let target = e.target;
      if(!target || !target.dataset || !target.dataset.type){
        return;
      }
      let type = target.dataset.type;
      let fn = this[type];
      if(typeof fn === 'function'){
        fn.call(this);
      }
    },
    openConfirm(){
      UM.showConfirm({
        title:'提示',
        content:'这是一段测试用的文字。',
        cancelText:'再想想',
        confirmText:'就这个啦',
        success:() => {
          console.log("confim the content.");
        },
        fail:() => {
          console.log("cancel the content.");
        },
      });
    },
    openMessage(){
      UM.showMessage({
        content:'这是一段测试用的文字。',
      });
    },
    openLoading(){
      UM.showLoading({
        url:'/static/assets/loading.gif',
        content:'加载中...',
        mask:false,
      });
    },
    closeLoading(){
      UM.hideLoading();
    },
  }
}
</script>


