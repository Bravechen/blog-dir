(function(){
  console.log('second??',window.abc);
  let htmlStr = '<a href="#abc">{{number + 1}}{{m+2}}</a>';
  let reg = /([{]{1,3})[\w\W]+[}]{1,3}/g;

  console.log(htmlStr.match(reg));
  
  let obj = {
    num:3,
    m:4,
  };

  let keys = Object.keys(obj);
  let list = [];
  for(let value of keys){
    list[list.length] = obj[value];
  }
  console.log(list);
  let fn = new Function(keys,'return num+1');
  console.log(fn.apply(obj,list));



})();