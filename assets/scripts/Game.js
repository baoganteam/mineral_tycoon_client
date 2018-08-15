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
            console.log('show');
        }else{
            this.shop.closeShop();
            console.log(this.shop.node.active);
        }
    },

    //场景初始化
    onLoad: function() {
        this.audioManager = this.audioManager.getComponent('AudioManager');
        this.audioManager.playHomeBGM();
        this.userGlodView = this.userGlodView.getChildByName('UserGlodView');
        this.userDiamondView = this.userDiamondView.getChildByName('UserDiamondView');

        this.shop = this.shop.getComponent('Shop');


        //初始化采矿计时器
        this.miningScheduleCallback = function() {
        	this.updateUserGold();
        }
        this.schedule(this.miningScheduleCallback, playerData.coinProductivity);
        //初始化当前界面显示
        this.updateUserGoldView();
        this.updateUserDiamondView();
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

    //根据当前生产力更新用户金币
    updateUserGold: function() {
        playerData.coinCount = playerData.coinCount + playerData.curProlificacy*10;
    },

    //当玩家生产效率提高后，更新定时器
    updateMiningScheduler: function(){
    	this.unschedule(this.miningScheduleCallback);
    	this.schedule(this.miningScheduleCallback, playerData.coinProductivity);
    },


    //-- 更新
    update (dt) {
        //更新用户金币和钻石
        this.updateUserGoldView();
        this.updateUserDiamondView();

    }

    // update (dt) {},
});
