import isFunction from '../internal/isFunction.js';

class Functor {
  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return isFunction(fn) ? new Functor(fn(this._value)) : new Functor(this._value);
  }

  value() {
    return this._value;
  }
}

function functorFactory(value) {
  return new Functor(value);
}

export default functorFactory;