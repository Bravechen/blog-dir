import strategy from './lib/calculateStrategy.js';

console.log(strategy.ADD,"===============>>",strategy.calculate(2,3,strategy.ADD));
console.log(strategy.SUB,"===============>>",strategy.calculate(2,3,strategy.SUB));
console.log(strategy.MUL,"===============>>",strategy.calculate(2,3,strategy.MUL));
console.log(strategy.DIV,"===============>>",strategy.calculate(2,3,strategy.DIV));
