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
        scrollView: cc.ScrollView,
        prefabOtherRankItem: cc.Prefab,
    },

    onLoad: function() {
        this.getRankData();
        this.content = this.scrollView.content;

        for (let i = 0; i < this.rankListData.length; i++) {
            let rankData = this.rankListData[i];
            let item = cc.instantiate(this.prefabOtherRankItem);
            item.getComponent('OtherRankItem').init(rankData.rank, rankData);
            this.content.addChild(item);
        }
    },

    //构造加数据,加上访问服务端后修改此方法
    getRankData: function() {
        this.rankListData = new Array();
        for (let i = 1; i < 10; i++) {
            let r = {
                nickName: '杨晔',
                rank: i,
                prolificacy: 100,
                avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/AZq6fh2gwBlYAUkYhzT8VrEDyZMZook9jNAeACZ3k6nibxkCwoTP2etk4XjhibmQJoR8ic3pok8K4IljojNl4lKhA/132?aa=aa.jpg',
            };
            this.rankListData.push(r);
        } 

    }

    // update (dt) {},
});
