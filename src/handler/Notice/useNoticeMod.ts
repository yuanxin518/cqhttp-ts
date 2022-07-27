import {
	FriendAddModType,
	GroupRecallModType,
} from '../../types/Mod/NoticeModType';
import { friendAddMods } from './friendAddHandler';
import { groupRecallMods } from './groupRecallHandler';

export const useNoticeMod = (
	mod: GroupRecallModType[] | FriendAddModType[]
) => {
	// 添加处理器
	if (mod instanceof Array) {
		mod.forEach((item) => {
			if (item.handler === undefined) return;
			switch (item.type) {
				case 'groupRecallMod':
					groupRecallMods.push(item);
					break;
				case 'friendAddMod':
					friendAddMods.push(item);
			}
		});
		return;
	}
};
