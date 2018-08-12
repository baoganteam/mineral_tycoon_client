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
        buttonAudio: {
            default: null,
            url: cc.AudioClip
        },

        homeAudio: {
            default: null,
            url: cc.AudioClip
        },

        map1Audio: {
            default: null,
            url: cc.AudioClip
        }
    },

    pauseMusic: function() {
        cc.audioEngine.pauseMusic();
    },

    resumeMusic: function() {
        cc.audioEngine.resumeMusic();
    },

    playHomeBGM: function() {
        cc.audioEngine.playMusic( this.homeAudio, true );
    },

    _playSFX: function(clip) {
        cc.audioEngine.playEffect( clip, false );
    },

    playButton: function() {
        this._playSFX(this.buttonAudio);
    }

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    

    // update (dt) {},
});
