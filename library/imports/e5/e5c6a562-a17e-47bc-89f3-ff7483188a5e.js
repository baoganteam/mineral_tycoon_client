"use strict";
cc._RF.push(module, 'e5c6aVioX5HvInz/3SDGIpe', 'AudioManager');
// scripts/AudioManager.js

"use strict";

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

    pauseMusic: function pauseMusic() {
        cc.audioEngine.pauseMusic();
    },

    resumeMusic: function resumeMusic() {
        cc.audioEngine.resumeMusic();
    },

    playHomeBGM: function playHomeBGM() {
        cc.audioEngine.playMusic(this.homeAudio, true);
    },

    _playSFX: function _playSFX(clip) {
        cc.audioEngine.playEffect(clip, false);
    },

    playButton: function playButton() {
        this._playSFX(this.buttonAudio);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},


    // update (dt) {},
});

cc._RF.pop();