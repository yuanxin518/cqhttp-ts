import linkServer, { CqApi, modMonitor, ModTypes, PostTypes, useMod } from "./src";

const messageModTest = (whiteList: number[] | false): ModTypes.GroupMessageModType => {
    const handler = async (msg: PostTypes.GroupMessageType) => {
        const res = await CqApi.setEssenceMsgApi({
            message_id: msg.message_id,
        }); //注意 api始终需要传入一个参数对象，即使内容为空。
        console.log(res); //得到相应的结果。如果该条消息是精华等错误，则返回 调用api失败

        console.log(modMonitor.messageModStore); //得到当前所有正在运行的消息mod列表,可以在任何地方使用
    };

    return {
        type: "groupMessageMod",
        name: "把消息设置为精华消息",
        whiteList, //如果whiteList是false,则对所有消息都响应。有些mod没有设置白名单的字段。
        handler,
    };
};
// linkServer(8080);
linkServer("ws://localhost:8080");
useMod.useMessageMod([messageModTest([123456789])]);
