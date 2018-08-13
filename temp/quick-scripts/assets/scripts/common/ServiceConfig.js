(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/common/ServiceConfig.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9da68eLXPBKcY7tnx8Uu8PF', 'ServiceConfig', __filename);
// scripts/common/ServiceConfig.js

'use strict';

var serverHost = 'https://71fkohlb.qcloud.la';

var gameConfig = {

    serverHost: serverHost,

    // 登录地址，用于建立会话
    loginUrl: serverHost + '/weapp/login',

    // 测试的请求地址，用于测试会话
    requestUrl: serverHost + '/weapp/user',

    // 测试的信道服务地址
    tunnelUrl: serverHost + '/weapp/tunnel',

    gameSummaryDataurl: serverHost + '/weapp/user_game_summary_data',

    userWorkerUrl: serverHost + '/weapp/user_worker_info',

    userMapUrl: serverHost + '/weapp/user_map_info',

    userCollectionUrl: serverHost + '/weapp/user_collection_info'
};

module.exports = {
    gameConfig: gameConfig
};

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
        //# sourceMappingURL=ServiceConfig.js.map
        