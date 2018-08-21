// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

//玩家数据
var playerData = require('./common/playerData');
var gameConfig = require('./common/GameConfig');

cc.Class({
    extends: cc.Component,

    properties: {
        //声音管理器
        audioManager: cc.Node,

        //声音控制按钮
        toggleMute: {
            default: null,
            type: cc.Node
        },

        //商店
        shop: {
            default:null,
            type: cc.Node
        },

        //工人管理
        workerManager: {
            default: null,
            type: cc.Node
        },
        //用户金币展示
        userGlodView: {
            default: null,
            type: cc.Node
        },

        //用户钻石展示
        userDiamondView: {
            default: null,
            type: cc.Node
        },

        //采矿展示区
        miningView: {
            default: null,
            type: cc.Node
        },

        playerProlificacyBuffView: {
            default: null,
            type: cc.Node
        },

        playerLuckyBuffView: {
            default: null,
            type: cc.Node
        }

    },


    //游戏声音控制
    toggleSoundConfig: function(){
        var toggleMute = this.toggleMute.getComponent('ToggleMute');
        var toggleMuteSprite = this.toggleMute.getComponent(cc.Sprite);
        if(toggleMute.soundStatus === 1){
            toggleMute.soundStatus = 0;
            toggleMuteSprite.spriteFrame.setTexture(cc.url.raw('resources/textures/home/home_btn_sound.png'));
            this.audioManager.pauseMusic();
        }else {
            toggleMute.soundStatus = 1;
            toggleMuteSprite.spriteFrame.setTexture(cc.url.raw('resources/textures/home/home_btn_mute.png'));
            this.audioManager.resumeMusic();
        }
    },

    shopButtonClicked() {
        if(this.shop.node.active == false){
            this.shop.showShop();
        }else{
            this.shop.closeShop();
        }
    },

    workerManagerButtonClicked() {
        if(this.workerManager.node.active == false){
            this.workerManager.showWorkerManager();
        }else{
            this.workerManager.closeWorkerManager();
        }
    },
    

    //场景初始化
    onLoad: function() {
        this.audioManager = this.audioManager.getComponent('AudioManager');
        this.audioManager.playHomeBGM();
        this.userGlodView = this.userGlodView.getChildByName('UserGlodView');
        this.userDiamondView = this.userDiamondView.getChildByName('UserDiamondView');

        this.shop = this.shop.getComponent('Shop');
        this.workerManager = this.workerManager.getComponent('WorkerManager');
        this.miningView = this.miningView.getComponent('MapManager');
        this.miningView.changeMap(playerData.curUseMap, playerData.mapList[playerData.curUseMap]);
        this.miningView.updateWorkerToMap(playerData.workerList);
        //初始化采矿计时器
        this.miningScheduleCallback = function() {
        	this.updateMiningData();
        }
        this.schedule(this.miningScheduleCallback, playerData.coinProductivity);
        //初始化出宝箱计时器
        // this.getChestSchedultCallBack = function() {

        // }
        // this.schedule(this.getChestSchedultCallBack, gameConfig.chestApperperiod)


        //初始化当前界面显示
        this.updateUserGoldView();
        this.updateUserDiamondView();

        //加buff
        //TODO: 这里只是加数据，上线后需要删除
        this.addProlificacyBuff();
        this.addLuckyBuff();    
    },

    //更新用户金币数显示栏
    updateUserGoldView: function() {
        let curUserCoinCount = playerData.coinCount;
        let dataLenght = `${curUserCoinCount}`.length;
        let unit = '';
        if(dataLenght > 4 && dataLenght < 7) {
            curUserCoinCount = (curUserCoinCount*1.0/10000).toFixed(1);
            unit = 'W';
        }else if(dataLenght >= 7){
            curUserCoinCount = (curUserCoinCount*1.0/1000000).toFixed(1);
            unit = 'M';
        }
        this.userGlodView.getComponent(cc.Label).string = `${curUserCoinCount}${unit}`;
    },

    //更新用户钻石数显示栏
    updateUserDiamondView: function() {
        this.userDiamondView.getComponent(cc.Label).string = playerData.diamondCount;
    },

    //根据当前生产力更新用户金币与地图上剩余矿量
    updateMiningData: function() {
        let curMapInfo = playerData.mapList[playerData.curUseMap];
        if (curMapInfo.curMineralAmount > 0) {
            let factor = 1;
            let pBuffInfo = playerData.buffList['p'];
            if (pBuffInfo != null) {
                if (pBuffInfo.buffRemaining > 0) { factor = 5; }
            }
            playerData.coinCount = playerData.coinCount + playerData.curProlificacy*5*factor;
            this.audioManager.playAddCoin();
            let mineDecCount = (playerData.curProlificacy*factor - curMapInfo.mineralGenerationRate > 0 ? playerData.curProlificacy*factor - curMapInfo.mineralGenerationRate : 1)*5;
            curMapInfo.curMineralAmount = curMapInfo.curMineralAmount - mineDecCount;
            if (curMapInfo.curMineralAmount < 0) {
                curMapInfo.curMineralAmount = 0;
            }
            this.miningView.updateCurMapMineRemaingAmountInfo(curMapInfo.curMineralAmount);
        }
        
    },

    //当玩家生产效率提高后，更新定时器
    updateMiningScheduler: function(){
    	this.unschedule(this.miningScheduleCallback);
    	this.schedule(this.miningScheduleCallback, playerData.coinProductivity);
    },

    //加生产力buff
    addProlificacyBuff: function() {
        let pBuff = {
            buffDuration: 60,
            buffRemaining: 60
        };
        playerData.buffList['p'] = pBuff;
        this.schedule(function() {
                let pBuffInfo = playerData.buffList['p'];
                if (pBuffInfo.buffRemaining > 0) {
                    pBuffInfo.buffRemaining = pBuffInfo.buffRemaining - 1;
                }else{
                    delete playerData.buffList['p'];
                }
            }, 
            1, pBuff.buffDuration);
    },

    //加幸运值buff
    addLuckyBuff: function() {
        let lBuff = {
            buffDuration: 60,
            buffRemaining: 60
        }
        playerData.buffList['l'] = lBuff;

        this.schedule(function() {
                let lBuffInfo = playerData.buffList['l'];
                if (lBuffInfo.buffRemaining > 0) {
                    lBuffInfo.buffRemaining = lBuffInfo.buffRemaining - 1;
                }else{
                    delete playerData.buffList['l'];
                }
            }, 
            1, lBuff.buffDuration);
    },

    updateProlificacyBuffView: function() {
        let buffInfo = playerData.buffList['p'];
        if (buffInfo != null) {
            let buffTotalDuration = buffInfo.buffDuration;
            let buffRemaingDuration = buffInfo.buffRemaining;
            let progress = (buffRemaingDuration/buffTotalDuration).toFixed(2);
            let pBuffLabel = this.playerProlificacyBuffView.getChildByName('MiningBuffLabel').getComponent(cc.Label);
            pBuffLabel.string = `生产力加成效果剩余时间: ${buffRemaingDuration}s`;
            let pBuffBar = this.playerProlificacyBuffView.getChildByName('MiningBuffBar').getComponent(cc.ProgressBar);
            pBuffBar.progress = progress
        }      
    },

    updateLuckyBuffView: function() {
        let buffInfo = playerData.buffList['l'];
        if (buffInfo != null) {
            let buffTotalDuration = buffInfo.buffDuration;
            let buffRemaingDuration = buffInfo.buffRemaining;
            let progress = (buffRemaingDuration/buffTotalDuration).toFixed(2);
            let pBuffLabel = this.playerLuckyBuffView.getChildByName('MiningLuckyBuffLabel').getComponent(cc.Label);
            pBuffLabel.string = `幸运值加成效果剩余时间: ${buffRemaingDuration}s`;
            let pBuffBar = this.playerLuckyBuffView.getChildByName('MiningLuckyBuffBar').getComponent(cc.ProgressBar);
            pBuffBar.progress = progress
        }   
    },


    //-- 更新
    update (dt) {
        //更新用户金币和钻石
        this.updateUserGoldView();
        this.updateUserDiamondView();
        //更新玩家buff剩余时间显示
        this.updateProlificacyBuffView();
        this.updateLuckyBuffView();

    }

    // update (dt) {},
});
