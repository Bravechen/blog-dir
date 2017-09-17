
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


export default {
  preset,
  drawRect,
  drawArcTo,
  rotateRect,
};