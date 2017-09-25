import learn1 from './learn/learn1.js';

var stage1;

function init(){
  let stage1 = document.getElementById('stage1');
  
  handleLearn1(stage1);
}

function handleLearn1(stage){
  learn1.preset(stage);
  // learn1.drawRect();
  // learn1.drawArcTo();
  // learn1.rotateRect();
  // learn1.drawLineGradient();
  learn1.drawRaidalGradient();
}

window.onload = init;

//1.必须使用`type=module`的script标签才能在脚本中使用`import`语句
//2.模块文件中自成一个作用域，定义的变量不会造成全局污染。
//3.模块会按照import导入文件的顺序加载js文件，并且总是在引用的模块之前。