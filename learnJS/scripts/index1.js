(function(){

  var doc = window.documentElement || window.document;

  doc.addEventListener('DOMContentLoaded',function(e){
    console.log("DOMContentLoaded fired.",e);
  });

  window.addEventListener('load',function(e){
    console.log("window load fired",e);
  });

})();