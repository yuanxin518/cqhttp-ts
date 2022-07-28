# cqhttp-ts
go-cqhttp的ts开发框架

## 快速开始
首先开启go-cqhttp的websocket，登录到一个qq。
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

## *如何实现拓展
> 系统导出了类似于useMessageMod和useNoticeMod形式的函数。以群消息为例
1. 在任何地方使用useMod.useMessageMod()函数
2. 这个函数需要提供一个对应的mod类型，你可以编写一个函数来实现对应的函数（FriendMessageModType）。
3. FriendMessageModType要求强制传入一个**number数组**来实现白名单（具体是否实现了白名单，根据modType中的字段来查看）。还需要实现**handler**来作为处理的入口，实现**name**来进行统一管理，实现**type**来作为内部识别的标志
4. 编写handler函数。通过调用框架导出的api来实现主动操作，或者调用msg上绑定的reply快速回复消息。

## 如何查看我添加了哪些mod
modMonitor对象。 如果你导入的mod是MessageMod，那么你可以在modMonitor.messageModStore中拿到。

## 实现mod接口
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


## 响应流程
1. 接受通用上报
2. 判断通用上报类型
3. 在通用消息/事件...上报上绑定所需函数(消息上报内的reply等)
4. 将绑定后的通用消息细分为不同类别
5. 将细分后的不同类别的上报传到handler中处理。然后可以拓展mod
	* 处理器中定义容器存放不同的mod，每次消息都要经过每个mod的判断。如果mod中的规则匹配成功，则执行mod中的流程。