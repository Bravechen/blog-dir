import Stage from './display/Stage.js';
//====================================
let stageList = [];
let container = null;
let initialized = false;
let viewWidth = 0;
let viewHeight = 0;
let nest = 0;

function createCanvas(stageId,width,height){
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.setAttribute('id',stageId);

    return canvas;
}

function addStage(stageId){
    if(!stageId){
        return;
    }
    let canvas = createCanvas(stageId,viewWidth,viewHeight);
    container.appendChild(canvas);
    let stage = new Stage(canvas);
    stage._nest = nest + 1;
    stage._displayIndex = stageList.length;
    stage.stageId = stageId;
    stageList[stageList.length] = stage;
    return stage;
}

function removeStage(stage,doDestroy=true){
    if(!stage){
        return;
    }
    let index = stageList.indexOf(stage);
    if(index<0){
        return;
    }
    stageList.splice(index,1);
    if(!doDestroy){
        return;
    }
    stage.destroy();
}

function setStageIndex(stage,index){
    
}

function getStageAt(index){
    if(index<0 || index>=stageList.length){
        return;
    }
    return stageList[index];
}

function getStageById(stageId){
    let stage;
    let len = stageList.length;
    while(len--){
        stage = stageList[len];
        if(stage && stage.stageId === stageId){
            return stage;
        }
    }
    return stage;
}

function initialize(containerId,opt){
    if(initialized){
        return;
    }
    initialized = true;
    if(!containerId){
        throw new Error('We must need an dom element,plase set a id.');
    }
    container = document.getElementById(containerId);
    container.style.backgroundColor = '#ffffff';
    if(!container || container.nodeType !== 1){
        throw new Error('Can not find an element by containerId==>',containerId);
    }
    let cRect = container.getBoundingClientRect();
    viewWidth = cRect.width;
    viewHeight = cRect.height;

    this.addStage = addStage;
    this.removeStage = removeStage;
    this.getStageAt = getStageAt;
    this.getStageById = getStageById;
}

export default {
    initialize,
};