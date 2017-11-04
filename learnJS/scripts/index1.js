(function(){

  function mixin(){
    if(arguments.length===0){
      return;
    }

    var args = Array.prototype.slice.call(arguments,0),
        useDeep = args[0],
        target,
        from,
        froms;
    // = Array.prototype.slice.call(arguments,0)
    if(typeof useDeep === 'boolean'){
      
      target = args[1] || {}; 
      froms = args.slice(2);
    }else{
      target = useDeep || {};
      froms = args.slice(1);
    }

    var len = froms.length;
    for(var i=0;i<len;i++){
      from = froms[i];
      if(!from || from === target){
        continue;
      }
      for(var key in from){
        
      }
    }

    return target;
  }

})();