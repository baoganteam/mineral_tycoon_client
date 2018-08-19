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
        rankNum: cc.Label,
        playerAvatar: cc.Sprite,
        playerName: cc.Label,
        playerProlificacy: cc.Label
    },

    init: function(rank, playerInfo) {
        let playerName = playerInfo.nickName;
        let playerProlificacy = playerInfo.prolificacy;
        let avatarUrl = playerInfo.avatarUrl;
    

        this.rankNum.string = `${rank}.`;
        this.playerName.string = `${playerName}`;
        this.playerProlificacy.string = `生产力: ${playerProlificacy}`;

        var self = this;
        cc.loader.load({url: avatarUrl, type: 'jpg', isCrossOrigin: false}, function(err, texture){
            self.playerAvatar.spriteFrame = new cc.SpriteFrame(texture);
            self.playerAvatar.node.width = 75;
            self.playerAvatar.node.height = 75;
        });

    }

    // update (dt) {},
});
