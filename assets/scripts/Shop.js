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
var shopConfig = require('./common/shopConfig');

cc.Class({
    extends: cc.Component,

    properties: {
        miningView: {
            default: null,
            type: cc.Node
        },
        workerPriceLabel: {
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
        if(playerData.coinCount > shopConfig.workerPrice[playerData.workerList.length]){
            playerData.coinCount = playerData.coinCount - shopConfig.workerPrice[playerData.workerList.length];
            this.createWorker();
            this.miningView.updateWorkerToMap(playerData.workerList);
            Alert.show('购买成功！', null, false);
        }else{
            Alert.show('金币不足，购买失败！', null, false);
        }
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
        this.setupWorkerPriceLabel();
    },

    setupWorkerPriceLabel(){
        this.workerPriceLabel.getComponent(cc.Label).string = `${shopConfig.workerPrice[playerData.workerList.length]}`;
    },
    onLoad () {
        this.setupWorkerPriceLabel();
        this.miningView = this.miningView.getComponent('MapManager');
    },
    // start () {

    // },

    // update (dt) {},
});
