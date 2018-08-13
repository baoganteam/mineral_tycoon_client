"use strict";
cc._RF.push(module, 'd953c6ONmlJh4efwNToqCKh', 'Home');
// scripts/Home.js

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
    bgScroll: function bgScroll(dt) {
        this.homeBackground1.x += this.backgroundRollSpeed * dt;
        if (this.homeBackground1.x >= 800) {
            this.homeBackground1.x = 0;
        }

        this.homeBackground2.x += this.backgroundRollSpeed * dt;
        if (this.homeBackground2.x >= 0) {
            this.homeBackground2.x = -800;
        }
    },

    toggleRankList: function toggleRankList() {
        this.rankList.active = !this.rankList.active;
    },

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

    onLoad: function onLoad() {
        this.audioManager = this.audioManager.getComponent('AudioManager');
        this.audioManager.playHomeBGM();
    },

    loadGameScene: function loadGameScene() {
        cc.director.loadScene('Game');
    },

    //-- 更新
    update: function update(dt) {
        this.bgScroll(dt);
    }

    // update (dt) {},

});

cc._RF.pop();