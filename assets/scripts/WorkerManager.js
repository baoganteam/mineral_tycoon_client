// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var playerData = require('./common/playerData');
cc.Class({
    extends: cc.Component,
    properties:{
        workerManagerCell: {
            default: null,
            type: cc.Prefab
        }
    },
    showWorkerManager(){
        this.node.active = true;
        this.setupWorkerData();
    },

    closeWorkerManager(){
        this.node.active = false;
    },
    
    setupWorkerData(){
        for(var i = 0; i < playerData.workerList.length; i++){
            var worker = playerData.workerList[i];
            var newWorkerManagerCell = cc.instantiate(this.workerManagerCell);
            this.node.addChild(newWorkerManagerCell);
            newWorkerManagerCell.setPosition(cc.v2(0, 200 + i * 180));
            newWorkerManagerCell.worker = worker;
            console.log(newWorkerManagerCell.worker.workerLevel);
        }
    },
    upgradeWorker(){
        console.log('fsdfdsfsd');
    },
    onLoad(){
    },
    start () {

    },

    // update (dt) {},
});
