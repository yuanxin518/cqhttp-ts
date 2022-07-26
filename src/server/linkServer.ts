import { GeneralPost, MessagePost } from '../types/GeneralPostType';
import { WebSocket } from 'ws';
import friendMessageHandler from '../handler/Message/friendMessageHandler';
import groupMessageHandler from '../handler/Message/groupMessageHandler';
import bindReply from './bindFunction/bindReply';

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
				const message: MessagePost = data as any;
				// 绑定自动回复函数
				bindReply(CqWebsocket, message);
				if (message.message_type === 'private') {
					friendMessageHandler(message as any);
				} else if (message.message_type === 'group') {
					groupMessageHandler(message as any);
				}
				break;
		}
	});
};

const linkServer = initLinkServer;
export default linkServer;
