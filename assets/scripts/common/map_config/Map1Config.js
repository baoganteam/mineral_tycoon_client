// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var playerData = require('../playerData');

cc.Class({
    extends: cc.Component,

    properties: {
        copperMineType1Prefab: {
            default: null,
            type: cc.Prefab
        },
        copperMineType2Prefab: {
            default: null,
            type: cc.Prefab
        },
        copperMineType3Prefab: {
            default: null,
            type: cc.Prefab
        },
        copperMineType4Prefab: {
            default: null,
            type: cc.Prefab
        },

        curMineralAmount: 100000,

        totalMineralAmount: 100000,

        mineralGenerationRate: 100
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad: function () {
        this.initMap();
    },

    //初始化地图
    initMap: function() {
        this.initMapProperty();
        this.initMinePos();
    },

    initMapProperty: function() {

    },

    //初始化地图上矿物分布
    initMinePos: function() {
        var newCopperMineType1 = cc.instantiate(this.copperMineType1Prefab);
    }

    // update (dt) {},
});
