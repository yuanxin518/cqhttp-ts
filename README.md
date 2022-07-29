<div align=center>

# cqhttp-ts

![OneBot12](https://img.shields.io/badge/OneBot-12-black?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAMAAADxPgR5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRF////29vbr6+vAAAAk1hCcwAAAAR0Uk5T////AEAqqfQAAAKcSURBVHja7NrbctswDATQXfD//zlpO7FlmwAWIOnOtNaTM5JwDMa8E+PNFz7g3waJ24fviyDPgfhz8fHP39cBcBL9KoJbQUxjA2iYqHL3FAnvzhL4GtVNUcoSZe6eSHizBcK5LL7dBr2AUZlev1ARRHCljzRALIEog6H3U6bCIyqIZdAT0eBuJYaGiJaHSjmkYIZd+qSGWAQnIaz2OArVnX6vrItQvbhZJtVGB5qX9wKqCMkb9W7aexfCO/rwQRBzsDIsYx4AOz0nhAtWu7bqkEQBO0Pr+Ftjt5fFCUEbm0Sbgdu8WSgJ5NgH2iu46R/o1UcBXJsFusWF/QUaz3RwJMEgngfaGGdSxJkE/Yg4lOBryBiMwvAhZrVMUUvwqU7F05b5WLaUIN4M4hRocQQRnEedgsn7TZB3UCpRrIJwQfqvGwsg18EnI2uSVNC8t+0QmMXogvbPg/xk+Mnw/6kW/rraUlvqgmFreAA09xW5t0AFlHrQZ3CsgvZm0FbHNKyBmheBKIF2cCA8A600aHPmFtRB1XvMsJAiza7LpPog0UJwccKdzw8rdf8MyN2ePYF896LC5hTzdZqxb6VNXInaupARLDNBWgI8spq4T0Qb5H4vWfPmHo8OyB1ito+AysNNz0oglj1U955sjUN9d41LnrX2D/u7eRwxyOaOpfyevCWbTgDEoilsOnu7zsKhjRCsnD/QzhdkYLBLXjiK4f3UWmcx2M7PO21CKVTH84638NTplt6JIQH0ZwCNuiWAfvuLhdrcOYPVO9eW3A67l7hZtgaY9GZo9AFc6cryjoeFBIWeU+npnk/nLE0OxCHL1eQsc1IciehjpJv5mqCsjeopaH6r15/MrxNnVhu7tmcslay2gO2Z1QfcfX0JMACG41/u0RrI9QAAAABJRU5ErkJggg==)

</div>

基于[go-cqhttp](https://github.com/Mrs4s/go-cqhttp)的ts开发框架。


## 快速开始
**首先开启go-cqhttp的websocket，登录到一个qq。**

```
npm i cqhttp-ts
```
```
import linkServer, { ModTypes, PostTypes, useMod } from 'cqhttp-ts';
linkServer(8080); //需要开启websocket

useMod.useMessageMod([friendMessageModTest([2389451262]),xxx(),xxx().....]);
//类似这样来加载更多的mod

```
```
import { CqApi,ModTypes,PostTypes} from 'cqhttp-ts';

export default (whiteList: number[] | false): ModTypes.GroupMessageModType => {
	const handler = async (msg: PostTypes.GroupMessageType) => {
		const res = await CqApi.setEssenceMsgApi({
			message_id: msg.message_id,
		});//注意 api始终需要传入一个参数对象，即使内容为空。
		console.log(res);//得到相应的结果。如果该条消息是精华等错误，则返回 调用api失败

		console.log(modMonitor.messageModStore)//得到当前所有正在运行的消息mod列表,可以在任何地方使用
	};

	return {
		type: 'groupMessageMod',
		name: '把消息设置为精华消息',
		whiteList,			//如果whiteList是false,则对所有消息都响应。有些mod没有设置白名单的字段。
		handler,
	};
};

```
## 如何监听事件
[事件文档-> cqhttp帮助中心-事件](https://docs.go-cqhttp.org/event/)
1. 每一个事件都有一个对应的对象类型来与之对应。例如群消息mod的类型为ModTypes.GroupMessageModType.
2. **原则上，每一种事件的监听都要在useMod.useMessageMod([])等函数中参数的数组中传入一个ModTypes中类型的对象。** 注意即使没有mod也要传入一个空数组。
3. modType中实现的handler函数会接收一个参数，参数名称和事件对应。比如群消息事件对应的消息类型为 PostTypes.GroupMessageType。
4. 如果是message类型的mod，则msg上有reply函数可以快速回复。
5. 消息类型mod中会有一个白名单whiteList的字段。如果传入false给whiteList，则表示取消白名单。否则接受一个number数组。

## 如何使用api
[API列表-> cqhttp帮助中心-API](https://docs.go-cqhttp.org/api/)
1. 例如需要使用 获取群信息的API，则调用CqApi.getGroupInfoApi({})
2. 在文档中有一个终结点，api的命名基本是以终结点转化为小驼峰式命名的。
3. 这个函数规定必须传入一个参数对象，即使参数为空。 参数内容和文档的参数对应，或者查看ts类型。
4. 这个api是返回的是一个promise。得到的结果是响应数据。

## 如何查看目前运行的所有mod
1. 在每个mod对象中都有一个name属性，这里就是运用到name属性的地方。
2. 在modMonitor对象中包含了所有的mod类型。modMonitor.messageModStore就可以获得message类型的mod。
3. 通过name来区分mod。

## 综合上述-> 如何实现拓展
> 系统导出了类似于useMessageMod和useNoticeMod形式的函数。以群消息为例
1. 在任何地方使用useMod.useMessageMod()函数
2. 这个函数需要提供一个对应的mod类型的对象，你可以编写一个函数来实现对应的函数类型来返回这个对象。（FriendMessageModType）。
3. FriendMessageModType要求强制传入一个**number数组**来实现白名单（具体是否实现了白名单，根据modType中的字段来查看）。还需要实现**handler**来作为处理的入口，实现**name**来进行统一管理，实现**type**来作为内部识别的标志
4. 编写handler函数。通过调用框架导出的api来实现主动操作，或者调用msg上绑定的reply快速回复消息。

## 实现的mod接口
>  在ModTypes中调用以下所有函数
> 具体用处见 [cqhttp帮助中心](https://docs.go-cqhttp.org/api/#%E5%9F%BA%E7%A1%80%E4%BC%A0%E8%BE%93)
> 
**messageMod**
* FriendMessageModType 朋友消息拓展模块
* GroupMessageModType 群消息拓展模块

**noticeMod**
* ClientStatusUpdateModType
* FriendAddModType
* FriendRecallModType
* FriendPokeModType
* GroupAdminUpdateModType
* GroupBanModType
* GroupCardUpdateModType
* GroupEssenceModType
* GroupHonorUpdateModType
* GroupLuckyKingModType
* GroupMemberDecreaseModType
* GroupMemberIncreaseModType
* GroupRecallModType
* GroupPokeModType
* GroupUploadFileModType
* ReceiveOfflineFileModType

**requestMod**
* friendAddRequestModType
* groupAddRequestModType

## 实现api
> CqApi是一个异步函数，可以获取到响应结果。
> 在CqApi中调用下列函数

* canSendImageApi,
* canSendRecordApi,
* checkUrlSafelyApi,
* cleanCacheApiExpect,
* createGroupFileFolderApi,
* deleteEssenceMsgApi,
* deleteFriendApi,
* deleteGroupFileApi,
* deleteGroupFolderApi,
* deleteMessageApi,
* downloadFileApi,
* getCookiesApiExpect,
* getCredentialsApiExpect,
* getCSRFTokenApiExpect,
* getEssenceMsgListApi,
* GetForwardMessageApi,
* getFriendListApi,
* getGroupAtAllRemainApi,
* getGroupFileSystemInfoApi,
* getGroupFilesByFolderApi,
* getGroupFileUrlApi,
* getGroupHonorInfoApi,
* getGroupInfoApi,
* getGroupListApi,
* getGroupMemberListApi,
* getGroupMessageHistoryApi,
* getGroupNoticeApi,
* getGroupRootFilesApi,
* getGroupSystemMsgApi,
* getImageApi,
* getLoginInfoApi,
* getMessageApi,
* getModelShowApi,
* getOnlineClientsApi,
* getRecordApiExpect,
* getStatusApi,
* getStrangerInfoApi,
* getUnidirectionalFriendListApi,
* getVersionInfoApi,
* markMessageAsReadApi,
* ocrImageApi,
* reloadEventFilterApi,
* sendGroupForwardMessageApi,
* sendGroupMessageApi,
* sendGroupNoticeApi,
* sendGroupSignApi,
* sendMessageApi,
* sendPrivateMessageApi,
* setEssenceMsgApi,
* setFriendAddRequestApi,
* setGroupAddRequestApi,
* setGroupAdminApi,
* setGroupAnonymousApi,
* setGroupAnonymousBanApi,
* setGroupBanApi,
* setGroupCardApi,
* setGroupLeaveApi,
* setGroupNameApi,
* setGroupPortraitApi,
* setGroupSpecialTitleApi,
* setGroupWholeBanApi,
* setModelShowApi,
* setQQprofileApi,
* setRestartApi,
* uploadGroupFileApi,
* uploadPrivateFileApi,
