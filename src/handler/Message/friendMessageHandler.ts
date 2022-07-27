import { friendMessageModType } from '../../types/Mod/FriendMessageModType';
import { FriendMessageType } from '../../types/PostMessageType/FriendMessageType';

export const friendMessageMods: friendMessageModType[] = [];
function friendMessageHandler(msg: FriendMessageType) {
	friendMessageMods.forEach((item) => item.handle());
}
export default friendMessageHandler;
