const calculateList = {
  add(x,y){
    return x + y;
  },
  sub(x,y){
    return x - y;
  },
  mul(x,y){
    return x * y;
  },
  div(x,y){
    return x / y;
  },
};

export default {
  ADD:'add',
  SUB:'sub',
  MUL:'mul',
  DIV:'div',
  calculate(x,y,type){
    return calculateList[type](x,y);
  }
};