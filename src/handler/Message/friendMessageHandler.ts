import { FriendMessageModType } from '../../types/Mod/FriendMessageModType';
import { FriendMessageType } from '../../types/PostMessageType/FriendMessageType';
/**
 * mod容器
 */
export const friendMessageMods: FriendMessageModType[] = [];
/**
 *
 * @param msg 实现了FriendMessageModType的函数（方便内部实现）或对象（简洁）
 * @returns
 */
export const useFriendMessageMod = (
	msg: FriendMessageModType | FriendMessageModType[]
) => {
	// 添加处理器
	if (msg instanceof Array) {
		msg.forEach((item) => {
			if (item.handle === undefined) return;
			friendMessageMods.push(item);
		});
		return;
	}

	if (msg.handle === undefined) return;
	friendMessageMods.push(msg);
};

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
