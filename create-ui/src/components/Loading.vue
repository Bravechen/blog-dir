<style lang="scss" scoped>
    @import '../common/ui.scss';   
    
    .loading{        
        @extend %anmiate-layer;

        .loading__cnt{
            width:$loading-cnt-width;
            height:$loading-cnt-height;

            box-sizing: border-box;
            border-radius:$loading-cnt-borderRadius;
            background:$loading-cnt-bgColor;
            box-shadow: $loading-cnt-boxShadow;

            font-size:$loading-cnt-fontSize;
            color:$loading-cnt-fontColor;
            text-align: center;

            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;

            &>.loading__icon{
                width:$loading-icon-boxWidth;
                height:$loading-icon-height;

                text-align: center;
                
                &>img{
                    display:inline-block;
                    width:$loading-icon-width;
                    height:$loading-icon-height;
                }
            }          

            &>span{
                display:inline-block;
                width:$loading-text-width;
                height:$loading-text-height;

                line-height: $loading-text-lineHeight;    
                
                margin-top:4px;
            }
        }
    }
</style>
<template>
    <div 
        v-show="useLoading" 
        class="loading" 
        :class="{'layer--show':showing,'no-mask':!loadingData.mask,'transparent-have-mask':loadingData.mask}" >
        <div class="loading__cnt" >
            <div class="loading__icon" >
                <img v-if="!!loadingData.url" :src="loadingData.url" />
            </div>            
            <span>{{loadingData.content}}</span>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  data(){
      return {
          showing:false,
      };
  },
  updated(){
      if(this.useLoading && !this.showing){
          const that = this;
          let timer = setTimeout(function(){
              that.showing = true;
          },100);
      }

      if(!this.useLoading && this.showing){
          this.showing = false;
      }
  },
  computed:{
      ...mapGetters([
          'useLoading',
          'loadingData',
      ]),
  },
}
</script>
