(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '17aa6NZNARB34QPvClVV0j/', 'Game', __filename);
// scripts/Game.js

'use strict';

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
        audioManager: cc.Node,
        toggleMute: {
            default: null,
            type: cc.Node
        },
        shop: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    toggleSoundConfig: function toggleSoundConfig() {
        var toggleMute = this.toggleMute.getComponent('ToggleMute');
        var toggleMuteSprite = this.toggleMute.getComponent(cc.Sprite);
        if (toggleMute.soundStatus === 1) {
            toggleMute.soundStatus = 0;
            toggleMuteSprite.spriteFrame.setTexture(cc.url.raw('resources/textures/home/home_btn_sound.png'));
            this.audioManager.pauseMusic();
        } else {
            toggleMute.soundStatus = 1;
            toggleMuteSprite.spriteFrame.setTexture(cc.url.raw('resources/textures/home/home_btn_mute.png'));
            this.audioManager.resumeMusic();
        }
    },

    shopButtonClicked: function shopButtonClicked() {
        if (this.shop.node.active == false) {
            this.shop.showShop();
            console.log('show');
        } else {
            this.shop.closeShop();
            console.log(this.shop.node.active);
        }
    },

    onLoad: function onLoad() {
        this.audioManager = this.audioManager.getComponent('AudioManager');
        this.audioManager.playHomeBGM();

        this.shop = this.shop.getComponent('Shop');
    },

    //-- 更新
    update: function update(dt) {}

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
        //# sourceMappingURL=Game.js.map
        