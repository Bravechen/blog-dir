(function(){
  // var a = 100000000;
  // var m = 0;
  // for(var i=0;i<a;i++){
  //   m++;
  // }
  // console.log("defer1 exec complete.",m,i);

  function removeDByKey(list1,list2,key){
    let ary = list1.concat(list2);
    let sAry = new Array(ary.length);
    let result = [];
    let len = ary.length;
    while(len--){
      let value = ary[len][key];
      let index = sAry.indexOf(value);
      if(index===-1){
        sAry[len] = value;
        result[result.length] = len;
      }else{
        sAry[index] = null;
        result.splice(result.indexOf(index),1);
      }
    }
    len = result.length;
    while(len--){
      result[len] = ary[result[len]];
    }
    console.log("=====>>>",result,ary);
    return result;
  }
  var list1=[{id:1},{id:2},{id:3},{id:4},{id:5}];
  var list2=[{id:1},{id:2},{id:3},{id:4},{id:5}];
  console.time();
  removeDByKey(list1,list2,"id");
  console.timeEnd();
})();