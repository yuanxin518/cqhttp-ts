import { GroupMessageType } from '../../types/PostMessageType/GroupMessageType';

export default (msg: GroupMessageType) => {
	msg.reply(msg.group_id);
};
