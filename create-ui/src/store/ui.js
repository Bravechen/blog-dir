const SET_LOADING_DATA = 'setLoadingData';
const SET_DIALOG_DATA = 'setConfirmData';
const SET_MESSAGE_DATA = 'setMessageData';

export default {
  state:{
      useLoading:false,
      loadingData:{},

      useConfirm:false,
      confirmData:{},

      useMessage:false,
      messageData:{},
  },
  getters:{
      useLoading:state => state.useLoading,
      loadingData:state => state.loadingData,

      useConfirm:state => state.useConfirm,
      confirmData:state => state.confirmData,

      useMessage:state => state.useMessage,
      messageData:state => state.messageData,
  },
  actions:{
      setLoading({commit},data){
          commit(SET_LOADING_DATA,data);
      },
      setConfirm({commit},data){
          commit(SET_DIALOG_DATA,data);
      },
      setMessage({commit},data){
          commit(SET_MESSAGE_DATA,data);
      },
  },
  mutations:{
      setLoadingData(state,data){
          state.useLoading = data.using;
          state.loadingData = data.opt;
      },
      setConfirmData(state,data){
          console.log('will change confirm state====>',state,data);
          state.useConfirm = data.using;
          state.confirmData = data.opt;
      },
      setMessageData(state,data){
          state.useMessage = data.using;
          state.messageData = data.opt;
      },
  },
};