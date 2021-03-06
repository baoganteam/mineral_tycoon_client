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
        map1: {
        	default: null,
        	type: cc.Node
        },

        workerPrefab: {
            default: null,
            type: cc.Prefab
        },

        mineRemaingView: {
            default: null,
            type: cc.Node
        }
        
    },

    onLoad: function() {
        if (typeof(this.curActiveMap) != "undefined" && this.curActiveMap != null) {
            this.curActiveMap = this.map1;
        }
        this.workerPrefabList = new Object();
        this.curMineRemaingView = this.mineRemaingView;

    },

    changeMap: function(index, playerMapData) {
    	if (typeof(this.curActiveMap) != "undefined" && this.curActiveMap != null) {
    		this.curActiveMap.active = false;
    	}
    	switch(index){
    		case 1:
    			this.curActiveMap = this.map1;
    			this.curActiveMap.active = true;
                this.curActiveMap.getComponent('MapConfig').updateMapProperty(playerMapData);
    			break;
    	}
    },

    getCurMapMinePosInfo: function() {
        if (typeof(this.curActiveMap) != "undefined" && this.curActiveMap != null) {
             let mapInterface = this.curActiveMap.getComponent('MapConfig');
             return mapInterface.getAllMinePos();
        }else{
            return null;
        }
    },

    //更新地图上工人分布信息
    updateMiningInfo: function(miningInfo) {
        if (typeof(this.curActiveMap) != "undefined" && this.curActiveMap != null) {
             this.curActiveMap.getComponent('MapConfig').updateMiningInfo(miningInfo);
        }
    },

    //更新worker到地图中,玩家的工人列表数据修改后可以直接调用此方法更新地图上工人的显示
    updateWorkerToMap: function(playWorkerInfo){
        if (typeof(this.workerPrefabList) == "undefined" || this.workerPrefabList == null) {
            this.workerPrefabList = new Object();
        }
        let minePosInfo = this.getCurMapMinePosInfo();
        console.log(playWorkerInfo);
        for(let i=0; i < playWorkerInfo.length; i++){
            let workerId = playWorkerInfo[i].workerId;
            let workerStatus = playWorkerInfo[i].curStatus;
            if (this.workerPrefabList[workerId] == null) {
                if (workerStatus == 1) {
                    var newWorker = cc.instantiate(this.workerPrefab);
                    for (let [k, v] of Object.entries(minePosInfo)) {
                        if (v.isMining == false) {
                            if (v.miningDirection == 0) {
                                newWorker.setPosition(cc.v2(v.workerX, v.workerY));
                            }else{
                                newWorker.setPosition(cc.v2(v.workerX, v.workerY));
                                newWorker.scaleX = -1;
                            }
                            this.updateMiningInfo(k, true);
                            this.curActiveMap.addChild(newWorker);
                            this.workerPrefabList[workerId] = newWorker;
                            break;
                        }
                    }
                }
            }else{
                //销毁worker
                if (workerStatus === 0) {
                    this.workerPrefabList[workerId].getComponent('Worker').doDestroy();
                    delete this.workerPrefabList[workerId];
                    this.updateMiningInfo(k, false);
                }
            }

        }    
    },

    updateCurMapMineRemainingView: function() {
        if (typeof(this.curActiveMap) != "undefined" && this.curActiveMap != null) {
             let mapDataInterface = this.curActiveMap.getComponent('MapConfig');
             let totalMineAmount = mapDataInterface.getCurMapTotalMineAmount();
             let remaingMineAmount = mapDataInterface.getCurMapRemainingMineAmount();
             let progress = (remaingMineAmount*100/totalMineAmount).toFixed(2);

             let curMineRemaingLabel = this.curMineRemaingView.getChildByName('MineRemaingLabel').getComponent(cc.Label);
             curMineRemaingLabel.string = `剩余矿量:${progress}%`;
             let curMineRemaingBar = this.curMineRemaingView.getChildByName('MineRemaingBar').getComponent(cc.ProgressBar);
             curMineRemaingBar.progress = progress/100;
        }
    },

    //更新当前地图上剩余矿量
    updateCurMapMineRemaingAmountInfo: function(remaingMineAmount) {
        if (typeof(this.curActiveMap) != "undefined" && this.curActiveMap != null) {
            let mapDataInterface = this.curActiveMap.getComponent('MapConfig');
            mapDataInterface.updateCurMineAmount(remaingMineAmount);
        }
    },

    //每帧更新地图上的显示数据
    update: function(dt) {
        this.updateCurMapMineRemainingView();
    }

    
});
