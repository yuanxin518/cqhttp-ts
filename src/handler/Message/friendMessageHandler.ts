import { FriendMessageModType } from '../../types/Mod/MessageModType';
import { FriendMessageType } from '../../types/PostMessageType/FriendMessageType';
import modRun from '../modRun';
/**
 * mod容器
 */
export const friendMessageMods: FriendMessageModType[] = [];

/**
 * 调用所有处理器的handle
 * @param msg
 */
export default (msg: FriendMessageType) => {
	modRun(friendMessageMods, msg, msg.user_id);
};
