
const serverHost = 'https://71fkohlb.qcloud.la'

const gameConfig = {
 
        serverHost: serverHost,

        // 登录地址，用于建立会话
        loginUrl: `${serverHost}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${serverHost}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${serverHost}/weapp/tunnel`,

        gameSummaryDataurl: `${serverHost}/weapp/user_game_summary_data`,

        userWorkerUrl: `${serverHost}/weapp/user_worker_info`,

        userMapUrl: `${serverHost}/weapp/user_map_info`,

        userCollectionUrl: `${serverHost}/weapp/user_collection_info`
}

module.exports = {
    gameConfig: gameConfig
};
