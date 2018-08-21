// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

//worker
var playerData = require('./common/playerData');
cc.Class({
    extends: cc.Component,

    properties: {
        miningView: {
            default: null,
            type: cc.Node
        }
    },

    showShop(){
        this.node.active = true;
    },

    closeShop: function(){
        this.node.active = false;
    },

    byWorker(){
        this.createWorker();
        console.log(playerData.workerList[0].health);
        console.log(playerData.workerList[0].workerId);

        this.miningView = this.miningView.getComponent('MapManager');
        this.miningView.updateWorkerToMap(playerData.workerList);
    },

    createWorker(){
        var newWorker = {
            workerId: Math.random(),
            workerLevel: 1,
            health: 1000,
            prolificacy: 1,
            curStatus: 1
        };
        playerData.workerList.push(newWorker);
    },
    onLoad () {
    },
    // start () {

    // },

    // update (dt) {},
});
