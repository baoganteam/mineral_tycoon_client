"use strict";
cc._RF.push(module, '956e4E08WRJaInTzj+R0Jsu', 'ToggleMute');
// scripts/UI/ToggleMute.js

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
        soundStatus: 1
    },

    onLoad: function onLoad() {
        var audioMng = cc.find('HomeSceneMng/AudioManager') || cc.find('GameSceneMng/AudioManager');
        if (audioMng) {
            audioMng = audioMng.getComponent('AudioManager');
        }

        function onTouchDown(event) {
            if (audioMng) audioMng.playButton();
        }

        this.node.on('touchstart', onTouchDown, this.node);
    }

});

cc._RF.pop();