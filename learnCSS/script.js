(function(){
  console.log('second??',window.abc);
  let htmlStr = `<template>
  <figure class="app-item" >
    <a 
      class="app-item__icon"
      data-type="onPicHandler" 
      :href="app.id | linkURL" 
      :title="app.name" 
      :data-qr="app.id | qrURL"
      target="_blank" >

      <picture-box :type-key="picTypeKey" :url="app.logoPath | cdnURL" :describe="app.appName" ></picture-box>
    </a>  
    
    <figcaption>
      <a 
        class="app-item__name"
        data-type="onNameTapHandler" 
        :href="app.id | linkURL" 
        :title="app.appName" target="_blank" >{{app.appName}}</a>     
      
    </figcaption>
    <p class="app-item__describe" >
        <span>{{app.appName}}：</span>
        {{app.describe}}
    </p>
  </figure>
</template>`;
  let clearSpace = /\n\s/mg;
  let simpleSpace = /\s{2,}/mg;
  let clearTemplate = /<[/]?template>/g;
  let takeMustache = /[\{]{1,3}[^{}]+[\}]{1,3}/g;
  let clearTagGap = />\s</g;

  //  /\n\s/mg  //取出换行和空格

  //  /\s{2,}/mg  //取出最少2个的空格

  //  /<[/]?template>/g   取出<template></template>标签

  //[\s<]+[^<>]+[\S]+[\s>]

  // /[\{]{1,3}[^{}]+[\}]{1,3}/g //将{{}}和{{{}}}从闭合标签中分离出来

  // /<[^<>]+>/g  //将收尾是尖括号包裹的内容分离出来

  //  /\<[/]?template\>/g //将template标签分离出来

  //  /<[^<>/]+>/g  //将html标签的前半部分分离出来

  //  />\s</g   //将标签之间的空格消除

  let tempHtml = htmlStr.replace(clearSpace,'').replace(simpleSpace,' ').replace(clearTemplate,'');
  let expressList = tempHtml.match(takeMustache);

  //==========替换表达式==========
  let len=expressList.length;
  let temp = {};
  while(len--){
    let expression = expressList[len];
    if(temp[expression]){
      continue;
    }
    temp[expression] = true;
  }
  temp = Object.keys(temp);


  let expressStore = {};
  let temp2 = {};
  len = temp.length;
  
  while(len--){
    let key = 'expression'+len;
    let expression = temp[len];
    expressStore[key] = expression;
    temp2[expression] = key;
  }

  len = expressList.length;
  while(len--){
    let expression = expressList[len];
    let key = temp2[expression];
    tempHtml = tempHtml.replace(expression,key);
  }

  

  // console.log(tempHtml,expressList,expressStore,temp2);
  //===========================================================
  tempHtml = tempHtml.replace(clearTagGap,'><');
  console.log(tempHtml);
  
  // let obj = {
  //   num:3,
  //   m:4,
  // };

  // let keys = Object.keys(obj);
  // let list = [];
  // for(let value of keys){
  //   list[list.length] = obj[value];
  // }
  // console.log(list);
  // let fn = new Function(keys,'return num+1');
  // console.log(fn.apply(obj,list));



})();