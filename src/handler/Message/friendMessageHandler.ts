import { FriendMessageModType } from '../../types/Mod/MessageModType';
import { FriendMessageType } from '../../types/PostMessageType/FriendMessageType';
/**
 * mod容器
 */
export const friendMessageMods: FriendMessageModType[] = [];

/**
 * 调用所有处理器的handle
 * @param msg
 */
export default (msg: FriendMessageType) => {
	friendMessageMods.forEach((item) => {
		if (typeof item.whiteList === 'boolean') {
			item.handler(msg);
			return;
		}
		if (item.whiteList.includes(msg.user_id)) {
			item.handler(msg);
		}
	});
};
