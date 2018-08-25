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
        upgradeButton:{
            default: null,
            type: cc.Node
        },

        worker: null
    },

    // LIFE-CYCLE CALLBACKS:
    upgradeButtonClicked: function(event){
        console.log(this.worker);
        // this.worker.workerLevel = this.worker.workerLevel + 1; 
    },
    onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.upgradeButtonClicked, this.upgradeButton);
    },
    setupWorker(){
        console.log('31232131313131');
    },
    start () {
    },

    // update (dt) {},
});

// var WorkerManagerCell = {
//     _workerManagerCell: null,
//     _upgradeButton: null
// };

// cc.loader.loadRes('WorkerManagerCell', cc.Prefab, function (error, prefab){
//     if(WorkerManagerCell._workerManagerCell != undefined) return;
//     var workerManagerCell = cc.instantiate(prefab);
//     WorkerManagerCell._workerManagerCell = workerManagerCell;
//     WorkerManagerCell._upgradeButton = cc.find('UpgradeButton', workerManagerCell);

//     WorkerManagerCell._upgradeButton.on(cc.Node.EventType.TOUCH_START, self.onButtonClicked, self);

// });

// self.onButtonClicked = function(event){
//     this.console.log('12313123131');
// };