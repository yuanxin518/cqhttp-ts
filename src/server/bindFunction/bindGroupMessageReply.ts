import { WebSocket } from 'ws';
import createSendPoint from '../../api/tool/createSendPoint';
import { GroupMessageType } from '../../types/PostMessageType/GroupMessageType';

export default (ws: WebSocket, msgObj: GroupMessageType) => {
	msgObj.reply = (
		replyMessage: string | number,
		isAt?: boolean,
		isDelete?: boolean,
		isKick?: boolean,
		ban?: boolean,
		ban_duration?: number,
		autoEscape?: boolean
	) => {
		if (typeof replyMessage === 'number') {
			replyMessage = replyMessage.toString();
		}
		ws.send(
			createSendPoint('.handle_quick_operation', {
				context: msgObj,
				operation: {
					reply: replyMessage,
					at_sender: isAt,
					delete: isDelete === undefined ? false : isDelete,
					kick: isKick === undefined ? false : isKick,
					ban: ban === undefined ? false : ban,
					ban_duration: ban === undefined ? 30 : ban_duration,
					auto_escape: autoEscape === undefined ? false : autoEscape,
				},
			})
		);
	};
};
