import {
	GeneralPost,
	GeneralMessagePost,
	GeneralNoticePost,
} from '../types/GeneralPostType';
import { WebSocket } from 'ws';
import friendMessageHandler from '../handler/Message/friendMessageHandler';
import groupMessageHandler from '../handler/Message/groupMessageHandler';
import bindFriendMessageReply from './bindFunction/bindFriendMessageReply';
import { FriendMessageType } from '../types/PostMessageType/FriendMessageType';
import bindGroupMessageReply from './bindFunction/bindGroupMessageReply';
import { GroupMessageType } from '../types/PostMessageType/GroupMessageType';
import groupMessageRecallHandler from '../handler/Notice/groupMessageRecallHandler';
import clientStatusUpdateHandler from '../handler/Notice/clientStatusUpdateHandler';
import friendAddHandler from '../handler/Notice/friendAddHandler';
import groupAdminUpdateHandler from '../handler/Notice/groupAdminUpdateHandler';

export let CqWebsocket: WebSocket;
const initLinkServer = (port: number) => {
	CqWebsocket = new WebSocket('ws://localhost:' + port);

	CqWebsocket.on('open', () => {
		console.log('连接成功');
	});

	/**
	 * 流程
	 * 1. 接受通用消息
	 * 2. 判断通用消息类型
	 * 3. 在通用消息上绑定所需函数
	 * 4，将通用消息分配到不同的handler上
	 */
	CqWebsocket.on('message', (msg) => {
		const data: GeneralPost = JSON.parse(msg.toString());
		switch (data.post_type) {
			// 消息上报
			case 'message':
				const message: GeneralMessagePost = data as any;
				// 绑定自动回复函数
				if (message.message_type === 'private') {
					bindFriendMessageReply(CqWebsocket, message as FriendMessageType);
					friendMessageHandler(message as any);
				} else if (message.message_type === 'group') {
					bindGroupMessageReply(CqWebsocket, message as GroupMessageType);
					groupMessageHandler(message as any);
				}
				break;
			//notice上报
			case 'notice':
				const notice: GeneralNoticePost = data as any;
				switch (notice.notice_type) {
					case 'client_status':
						clientStatusUpdateHandler(notice as any);
						break;
					case 'essence':
					case 'friend_add':
						friendAddHandler(notice as any);
						break;
					case 'friend_recall':
					case 'group_admin':
						groupAdminUpdateHandler(notice as any);
						break;
					case 'group_ban':
					case 'group_card	':
					case 'group_decrease	':
					case 'group_increase':
					case 'group_recall': //群消息撤回
						groupMessageRecallHandler(notice as any);
						break;
					case 'group_upload':
					case 'notify':
					case 'offline_file':
					default:
						break;
				}
				break;
			default:
				break;
		}
	});
};

const linkServer = initLinkServer;
export default linkServer;
