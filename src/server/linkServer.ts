import {
	GeneralPost,
	GeneralMessagePost,
	GeneralNoticePost,
	NotifyTypePost,
	GeneralRequestPost,
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
import groupEssenceHandler from '../handler/Notice/groupEssenceHandler';
import friendMessageRecallHandler from '../handler/Notice/friendMessageRecallHandler';
import groupBanHandler from '../handler/Notice/groupBanHandler';
import groupMemberDecreaseHandler from '../handler/Notice/groupMemberDecreaseHandler';
import groupMemberIncreaseHandler from '../handler/Notice/groupMemberIncreaseHandler';
import groupUploadFileHandler from '../handler/Notice/groupUploadFileHandler';
import groupHonorUpdateHandler from '../handler/Notice/groupHonorUpdateHandler';
import groupLuckyKingHandler from '../handler/Notice/groupLuckyKingHandler';
import groupPokeHandler from '../handler/Notice/groupPokeHandler';
import receiveOfflineFileHandler from '../handler/Notice/receiveOfflineFileHandler';
import friendAddRequestHandler from '../handler/Request/friendAddRequestHandler';
import groupAddRequestHandler from '../handler/Request/groupAddRequestHandler';
import GroupCardUpdateHandler from '../handler/Notice/groupCardUpdateHandler';
import { CqApi } from '../api';
import { GetLoginInfoApiResponseType } from '../types/api';

export let CqWebsocket: WebSocket;
const initLinkServer = (port: number): Promise<GetLoginInfoApiResponseType> => {
	return new Promise((resolve, reject) => {
		CqWebsocket = new WebSocket('ws://localhost:' + port);

		CqWebsocket.on('error', (err) => {
			reject(err);
		});

		CqWebsocket.on('open', async () => {
			const res = await CqApi.getLoginInfoApi({});
			if (res.nickname && res.user_id) {
				console.log(`连接成功\n【${res.nickname}-${res.user_id}】已登录`);
				resolve(res);
			}
		});

		/**
		 * 流程
		 * 1. 接受通用消息
		 * 2. 判断通用消息类型
		 * 3. 在通用消息上绑定所需函数
		 * 4，将通用消息分配到不同的handler上
		 */
		CqWebsocket.on('message', (msg) => {
			// 处理消息
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
							groupEssenceHandler(notice as any);
							break;
						case 'friend_add':
							friendAddHandler(notice as any);
							break;
						case 'friend_recall':
							friendMessageRecallHandler(notice as any);
							break;
						case 'group_admin':
							groupAdminUpdateHandler(notice as any);
							break;
						case 'group_ban':
							groupBanHandler(notice as any);
							break;
						case 'group_card':
							GroupCardUpdateHandler(notice as any);
							break;
						case 'group_decrease':
							groupMemberDecreaseHandler(notice as any);
							break;
						case 'group_increase':
							groupMemberIncreaseHandler(notice as any);
							break;
						case 'group_recall': //群消息撤回
							groupMessageRecallHandler(notice as any);
							break;
						case 'group_upload':
							groupUploadFileHandler(notice as any);
							break;
						case 'notify':
							const notify: NotifyTypePost = notice as any;
							switch (notify.sub_type) {
								case 'honor':
									groupHonorUpdateHandler(notify as any);
									break;
								case 'lucky_king':
									groupLuckyKingHandler(notify as any);
									break;
								case 'poke':
									groupPokeHandler(notify as any);
									break;
								default:
									break;
							}
							break;
						case 'offline_file':
							receiveOfflineFileHandler(notice as any);
						default:
							break;
					}
					break;
				case 'request':
					const request: GeneralRequestPost = data as any;
					switch (request.request_type) {
						case 'friend':
							friendAddRequestHandler(request as any);
							break;
						case 'group':
							groupAddRequestHandler(request as any);
							break;
						default:
							break;
					}
				default:
					break;
			}
		});
	});
};

const linkServer = initLinkServer;
export default linkServer;
