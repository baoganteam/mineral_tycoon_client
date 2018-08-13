(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/AudioManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e5c6aVioX5HvInz/3SDGIpe', 'AudioManager', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=AudioManager.js.map
        