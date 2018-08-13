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
        audioManager: cc.Node,

        toggleMute: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

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
        this.audioManager = this.audioManager.getComponent('AudioManager');
        this.audioManager.playHomeBGM();
        console.log(playerData);
    },


    //-- 更新
    update (dt) {
        
 
    }

    // update (dt) {},
});
