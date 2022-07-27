import { GroupMessageModType } from '../../types/Mod/MessageModType';
import { GroupMessageType } from '../../types/PostMessageType/GroupMessageType';

/**
 * mod容器
 */
export const groupMessageMods: GroupMessageModType[] = [];

const groupMessageHandler = (msg: GroupMessageType) => {
	groupMessageMods.forEach((item) => {
		if (item.whiteList.includes(msg.group_id)) {
			item.handle(msg);
		}
	});
};

export default groupMessageHandler;
