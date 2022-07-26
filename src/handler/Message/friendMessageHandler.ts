import { CqWebsocket } from '../../server/linkServer';
import { FriendMessageType } from '../../types/PostMessageType/FriendMessageType';
import createSendPoint from '../createSendPoint';

function friendMessageHandler(msg: FriendMessageType) {
	msg.reply('你好', true);
}
export default friendMessageHandler;
