import singleton from './lib/singleton.js';

let some1 = singleton.getInstance();
let some2 = singleton.getInstance();

console.log("some1=====>",some1,some1.output());
console.log("some2=====>",some2,some2.output());
console.log("some1 equal some2?",some1 === some2);