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

var minePos = {
        mine1Pos: {
            x: -190,
            y: 0,
            isMining: false
        },
        mine2Pos: {
            x: 50,
            y: -100,
            isMining: false
        },
        mine3Pos: {
            x: 250,
            y: -255,
            isMining: false
        },
        mine4Pos: {
            x: -200,
            y: -345,
            isMining: false
        },
        mine5Pos: {
            x: 100,
            y: -407,
            isMining: false
        },
};

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
        this.minePoss = new Array();;
        var newCopperMine1 = cc.instantiate(this.copperMineType1Prefab);
        this.node.addChild(newCopperMine1);
        newCopperMine1.setPosition(cc.v2(minePos.mine1Pos.x, minePos.mine1Pos.y));
        this.minePoss.push(newCopperMine1);

        var newCopperMine2 = cc.instantiate(this.copperMineType2Prefab);
        this.node.addChild(newCopperMine2);
        newCopperMine2.setPosition(cc.v2(minePos.mine2Pos.x, minePos.mine2Pos.y));
        this.minePoss.push(newCopperMine2);

        var newCopperMine3 = cc.instantiate(this.copperMineType3Prefab);
        this.node.addChild(newCopperMine3);
        newCopperMine3.setPosition(cc.v2(minePos.mine3Pos.x, minePos.mine3Pos.y));
        this.minePoss.push(newCopperMine3);

        var newCopperMine4 = cc.instantiate(this.copperMineType3Prefab);
        this.node.addChild(newCopperMine4);
        newCopperMine4.setPosition(cc.v2(minePos.mine4Pos.x, minePos.mine4Pos.y));
        this.minePoss.push(newCopperMine4);

        var newCopperMine5 = cc.instantiate(this.copperMineType4Prefab);
        this.node.addChild(newCopperMine5);
        newCopperMine5.setPosition(cc.v2(minePos.mine5Pos.x, minePos.mine5Pos.y));
        this.minePoss.push(newCopperMine5);
    },

    getAllMinePos: function() {
        return minePos;
    }

    // update (dt) {},
});
