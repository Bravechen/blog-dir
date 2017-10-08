import filber from '../filber/Filber.js';

function preset(stageBox){
    filber.initialize(stageBox);
    let gameStage = filber.addStage('stage1');
    console.log(gameStage);
}

function drawRandomLine(){
    
}

export default {
    preset,
};