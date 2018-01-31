
class SomeClass{
  constructor(){
      console.log("create SomeClass");
      this.name = 'someClass' + Math.random()*100;
  }
  output(){
    console.log(this.name);
    return this.name;
  }
}

let instance;

export default {
  getInstance(){
      return instance || (instance = new SomeClass());
  }
};