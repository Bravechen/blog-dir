function* testg(){
  yield "123";
  yield "abc";
  return 345;
}
let g = testg();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());