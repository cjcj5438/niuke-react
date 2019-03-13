export function getRedirectPath({type,avator}) {
    // 根据用户信息 返回跳转地址
    // user.type / boss/genius
    // user.avatar /bossinfo /geniusinfo  、、头像
    let url=(type==='boss')?'/boss':'/genius'
    // 如果没有头像则用户信息不完整
    if(!avator){
        url+='info'
    }
    return url;
}
