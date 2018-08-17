// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        mineType1Prefab: {
            default: null,
            type: cc.Prefab
        },
        mineType2Prefab: {
            default: null,
            type: cc.Prefab
        },
        mineType3Prefab: {
            default: null,
            type: cc.Prefab
        },
        mineType4Prefab: {
            default: null,
            type: cc.Prefab
        },

        mapIndex: 0,

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

        switch(this.mapIndex){
            case 1:
                this.minePos = require('./Map1ConfigData');
                break;

        }
    },

    //初始化地图上矿物分布
    initMinePos: function() {
        for (let [k, v] of Object.entries(this.minePos)) {
            let newMine = null;
            switch(v.type){
                case 1:
                    newMine = cc.instantiate(this.mineType1Prefab);
                    break;
                case 2:
                    newMine = cc.instantiate(this.mineType2Prefab);
                    break;
                case 3:
                    newMine = cc.instantiate(this.mineType3Prefab);
                    break;
                case 4:
                    newMine = cc.instantiate(this.mineType4Prefab);
                    break;
            }
            this.node.addChild(newMine);
            newMine.setPosition(cc.v2(v.x, v.y));
        }
    },

    getAllMinePos: function() {
        return this.minePos;
    },

    updateMiningInfo: function(miningInfo) {
        for (let i=0; i< miningInfo.length; i++) {
          this.minePos[miningInfo[i]].isMining = true;
        }
    }

    // update (dt) {},
});
