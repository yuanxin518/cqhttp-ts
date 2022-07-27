import { WebSocket } from 'ws';
import createSendPoint from '../../handler/createSendPoint';
import { MessagePost } from '../../types/GeneralPostType';
import whiteList from '../../config/whiteList';

export default (ws: WebSocket, msg: MessagePost) => {
	msg.reply = (replyMessage: string | number, autoEscape?: boolean) => {
		if (typeof replyMessage === 'number') {
			replyMessage = replyMessage.toString();
		}
		ws.send(
			createSendPoint('.handle_quick_operation', {
				context: msg,
				operation: {
					reply: replyMessage,
					auto_escape: autoEscape === undefined ? false : autoEscape,
				},
			})
		);
	};
};
