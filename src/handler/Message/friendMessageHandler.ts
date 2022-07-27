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
function friendMessageHandler(msg: FriendMessageType) {
	friendMessageMods.forEach((item) => {
		if (item.whiteList.includes(msg.user_id)) {
			item.handle(msg);
		}
	});
}

export default friendMessageHandler;
