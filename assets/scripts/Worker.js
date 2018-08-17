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
        miningAudio: {
            default: null,
            url: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    _playSFX: function(clip) {
        cc.audioEngine.playEffect( clip, false );
    },

    playMining: function() {
        this._playSFX(this.miningAudio);
    },

    onLoad: function() {
        
        this.playMiningAudioCallback = function() {
            var anim = this.getComponent(cc.Animation);
            var animState = anim.play('WorkerMining');
            animState.speed=0.5;
            this.playMining();
        }
        this.schedule(this.playMiningAudioCallback, 2);

        
    },

    doDestroy: function() {
        this.node.destroy();
    },

});
