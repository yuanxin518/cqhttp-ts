import { WebSocket } from 'ws';
import createSendPoint from '../../api/tool/createSendPoint';
import { FriendMessageType } from '../../types/PostMessageType/FriendMessageType';

export default (ws: WebSocket, msgObj: FriendMessageType) => {
	msgObj.reply = (replyMessage: string | number, autoEscape?: boolean) => {
		if (typeof replyMessage === 'number') {
			replyMessage = replyMessage.toString();
		}
		ws.send(
			createSendPoint('.handle_quick_operation', {
				context: msgObj,
				operation: {
					reply: replyMessage,
					auto_escape: autoEscape === undefined ? false : autoEscape,
				},
			})
		);
	};
};
