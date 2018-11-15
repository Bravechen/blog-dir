import isFunction from '../internal/isFunction.js';

class Monad {
  constructor(value) {
      this._value = value;
  }
  
  // unit / of 函数
  static of(value) {
      return new Monad(value);
  }
  
  //bind / map 函数
  map(fn) {
      return isFunction(fn) ? Monad.of(fn(this._value)) : Monad.of(this._value);
  }
  
  join() {
      if (!(this._value instanceof Monad)) {
          return this;
      }
      
      return this._value.join();
  }
  
  get value() {
      return this._value;
  }
}

export default Monad;