// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
module.exports = {
        mine1Pos: {
            x: -190,
            y: 0,
            workerX: -260,
            workerY: -30,
            type: 1,
            isMining: false,
            miningDirection: 0 //采矿时工人相对于矿的方向,0:左侧,1:右侧
        },
        mine2Pos: {
            x: 50,
            y: -100,
            workerX: 120,
            workerY: -120,
            type: 2,
            isMining: false,
            miningDirection: 1
        },
        mine3Pos: {
            x: 250,
            y: -255,
            workerX: 180,
            workerY: -265,
            type: 3,
            isMining: false,
            miningDirection: 0
        },
        mine4Pos: {
            x: -200,
            y: -345,
            workerX: -270,
            workerY: -315,
            type: 4,
            isMining: false,
            miningDirection: 0
        },
        mine5Pos: {
            x: 100,
            y: -407,
            workerX: 170,
            workerY: -407,
            type: 3,
            isMining: false,
            miningDirection: 1
        },
};

