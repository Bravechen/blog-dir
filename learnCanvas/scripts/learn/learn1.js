
let ctx;

function preset(canvas){
  if(!canvas){
    return;
  }
  ctx = canvas.getContext('2d');
  console.log(ctx);
}

function drawRect(){
  if(!ctx){
    return;
  }
  ctx.beginPath();
  ctx.fillStyle = '#de5050';
  ctx.rect(100,100,100,100);
  ctx.fill();
  ctx.closePath();
}

function drawArcTo(){
  if(!ctx){
    return;
  }
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = "#de5050";
  ctx.moveTo(100,100);
  ctx.lineTo(200,300);
  ctx.lineTo(350,350);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle="#333333";
  ctx.moveTo(200,300);
  ctx.arcTo(350,350,200,200,20);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle="#333333";
  ctx.moveTo(200,300);
  ctx.arcTo(350,350,200,200,30);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = "#eeff55";
  ctx.moveTo(350,350);
  ctx.lineTo(200,200);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

function rotateRect(){
  let x = 10;
  let y = 10;
  let width = 50;
  let height = 50;

  let dx = x+width*0.5-1;
  let dy = y+height*0.5-1;
  let cx = x-width*0.5;
  let cy = y-height*0.5;

  

  ctx.save();
  ctx.fillStyle = '#de5050';
  ctx.translate(x+width*0.5,y+height*0.5);
  ctx.rotate(Math.PI*0.25);
  ctx.fillRect(-width*0.5,-height*0.5,width,width);
  ctx.restore();

  ctx.fillRect(dx,dy,2,2);

}

function drawLineGradient(){

  let x = 100;
  let y = 100;
  let width = 200;
  let height = 200; 

  let qr = ctx.createLinearGradient(x,y,x+width,y);
  qr.addColorStop(0,'#de5050');
  qr.addColorStop(0.5,'#ffffff');
  qr.addColorStop(1,'#cccccc');

  let qr2 = ctx.createLinearGradient(x,y+height,x+width*2,y+height);
  qr2.addColorStop(0,'#ddee44');
  qr2.addColorStop(0.5,'#cc4455');
  qr2.addColorStop(1,'#eeccaa');

  ctx.save();
  ctx.fillStyle = qr;
  ctx.fillRect(x,y,width,height);
  
  ctx.restore();

  ctx.save();
  ctx.fillStyle = qr2;
  ctx.fillRect(x,y+height,width*2,height*0.5);
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = qr2;
  ctx.lineWidth = 4;
  ctx.arc(400,100,50,0,2*Math.PI,false);
  ctx.stroke();
  ctx.restore();
}

function drawRaidalGradient(){
  
  let qr = ctx.createRadialGradient(100,100,50,200,200,200);

  qr.addColorStop(0,'#de5050');
  qr.addColorStop(0.5,'#ffffff');
  qr.addColorStop(1,'#cccccc');

  ctx.save();
  ctx.fillStyle = qr;
  ctx.fillRect(0,0,500,500);
  ctx.restore();
}

//====================================================

//==================================================

export default {
  preset,
  drawRect,
  drawArcTo,
  rotateRect,
  drawLineGradient,
  drawRaidalGradient,
};