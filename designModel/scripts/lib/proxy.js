class SomeOneA{
  constructor(){
    this.name = "someOneA";
    this.msg = "";
  }
  message(msg){
    this.msg = msg;
    console.info(this.name,"receive a message",this.msg,+(new Date()));
  }
}

let someOne = new SomeOneA();

class ValidateProxy{
  constructor(){
    
  }
  message(msg){
    if(!msg || msg.length<6){
      console.error("The msg is not right===>",msg);
      return false;
    }
    someOne.message(msg);
  }
}

class DelayProxy{
  constructor(){

  }
  message(msg){
    console.time();
    console.log("wait...");
    let timer = setTimeout(function(){
      clearTimeout(timer);
      console.log("A moment later,exec...");
      someOne.message(msg);
      console.timeEnd();
    },1000);
    
  }
}

export default {
  validate(msg){
    if(!msg || msg.length<6){
      console.error("The msg is not right===>",msg);
      return false;
    }
    someOne.message(msg);
  },
  delay(msg){
    console.time();
    console.log("wait...");
    let timer = setTimeout(function(){
      
      console.log("A moment later,exec...");
      someOne.message(msg);
      
    },1000);
  },
  ValidateProxy,
  DelayProxy,
};