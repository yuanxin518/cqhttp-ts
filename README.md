# cqhttp-ts
go-cqhttp的ts开发框架

## 快速开始
```
npm i cqhttp-ts
```
```
import linkServer, { ModTypes, PostTypes, useMod } from 'cqhttp-ts';

linkServer(8080);

useMod.useMessageMod([friendMessageModTest([2389451262]),xxx(),xxx().....]);
//类似这样来加载更多的mod

```
```
//ModTypes 提供了所有的mod类型。
import {CqApi} from 'cqhttp-ts'

const friendMessageModTest = (
	whiteList: number[] | false
): ModTypes.FriendMessageModType => {

	//每个消息都会经过handler来处理。不同的ModType对应不同的PostType
	const handler = (msg: PostTypes.FriendMessageType) => {
		msg.reply('你好');
		CqApi.xxx;//这是实现的主动调用的api。
	};
	return {
		name: '测试',
		type: 'friendMessageMod',
		whiteList,
		handler,
	};
};
```

## *如何实现拓展
> 系统导出了类似于useMessageMod和useNoticeMod形式的函数。以群消息为例
1. 在任何地方使用useMod.useMessageMod()函数
2. 这个函数需要提供一个对应的mod类型，你可以编写一个函数来实现对应的函数（FriendMessageModType）。
3. FriendMessageModType要求强制传入一个**number数组**来实现白名单（具体是否实现了白名单，根据modType中的字段来查看）。还需要实现**handler**来作为处理的入口，实现**name**来进行统一管理，实现type来作为内部识别的标志
4. 编写handler函数。通过调用框架导出的api来实现主动操作，或者调用msg上绑定的reply快速回复消息。

## 如何查看我添加了哪些mod
modMonitor对象。 如果你导入的mod是MessageMod，name你可以在modMonitor.messageModStore中拿到。

## 实现mod接口
>  从ModTypes调用
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
* CqApi.sendPrivateMessageApi 发送私聊消息
* CqApi.sendGroupMessageApi 发送群消息
* sendGroupForwardMessageApi 群合并转发消息


## 响应流程
1. 接受通用上报
2. 判断通用上报类型
3. 在通用消息/事件...上报上绑定所需函数(消息上报内的reply等)
4. 将绑定后的通用消息细分为不同类别
5. 将细分后的不同类别的上报传到handler中处理。然后可以拓展mod
	* 处理器中定义容器存放不同的mod，每次消息都要经过每个mod的判断。如果mod中的规则匹配成功，则执行mod中的流程。