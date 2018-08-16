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
var worker = require('./common/PlayerWorkerInfo');
var playerData = require('./common/playerData');
cc.Class({
    extends: cc.Component,

    properties: {

    },

    showShop(){
        this.node.active = true;
    },

    closeShop: function(){
        this.node.active = false;
    },

    byWorker(){
        playerData.workerList.push(worker);
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },
    // start () {

    // },

    // update (dt) {},
});
