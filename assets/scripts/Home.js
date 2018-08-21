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

    properties: {
        homeBackground1: {
            default: null,
            type: cc.Node
        },

        homeBackground2: {
            default: null,
            type: cc.Node
        },

        audioManager: cc.Node,

        rankList: {
            default: null,
            type: cc.Node
        },

        shareLable: {
            default: null,
            type: cc.Node
        },

        toggleMute: {
            default: null,
            type: cc.Node
        },

        backgroundRollSpeed: 10
    },

    /**
    * 背景滚动
    */
    bgScroll: function(dt) {
        this.homeBackground1.x += this.backgroundRollSpeed * dt;
        if (this.homeBackground1.x >= 800) {
            this.homeBackground1.x = 0;
        }

        this.homeBackground2.x += this.backgroundRollSpeed * dt;
        if (this.homeBackground2.x >= 0) {
            this.homeBackground2.x = -800;
        }
    },

    toggleRankList: function() {
        this.rankList.active = !this.rankList.active;
    },

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

    onLoad: function() {
        this.initPlayData();
        this.audioManager = this.audioManager.getComponent('AudioManager');
        this.audioManager.playHomeBGM();
    },

    loadGameScene: function() {
        cc.director.loadScene('Game');
    },

    //初始化玩家数据(当前只是加数据)
    initPlayData: function() {
        console.log(playerData);
        playerData.workerCount = 1;
        playerData.curUseMap = 1;
        playerData.curProlificacy = 3;//playerData.workerCount*3;
        playerData
        for (let i = 1; i <= 5; i++) {
            let newWorker = {
                workerId: i,
                workerLevel: 1,
                health: 100,
                prolificacy: 1,
                curStatus: 1
            };
            playerData.workerList.push(newWorker);

        };

        let mapInfo = {
            mapIndex: 1,
            mineralGenerationRate: 15,
            isUnlock: 1,
            totalMineralAmount: 600,
            curMineralAmount: 600
        };
        playerData.mapList[playerData.curUseMap] = mapInfo;


        console.log(playerData.workerList);
        


    },


    //-- 更新
    update (dt) {
        this.bgScroll(dt);
 
    }

    // update (dt) {},
});
