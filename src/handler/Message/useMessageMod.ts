import { messageModStore } from '../../modMonitor';
import {
	FriendMessageModType,
	GroupMessageModType,
} from '../../types/Mod/MessageModType';
import { friendMessageMods } from './friendMessageHandler';
import { groupMessageMods } from './groupMessageHandler';

export const useMessageMod = (
	mod: Array<GroupMessageModType | FriendMessageModType>
) => {
	// 添加处理器
	if (mod instanceof Array) {
		mod.forEach((item) => {
			if (item.handler === undefined) return;
			switch (item.type) {
				case 'friendMessageMod':
					friendMessageMods.push(item);
					break;
				case 'groupMessageMod':
					groupMessageMods.push(item);
					break;
			}
			messageModStore.push(item);
		});
	}
};
