import {
	ClientStatusUpdateModType,
	FriendAddModType,
	FriendPokeModType,
	GroupAdminUpdateModType,
	GroupBanModType,
	GroupRecallModType,
} from '../../types/Mod/NoticeModType';
import { clientStatusUpdateMods } from './clientStatusUpdateHandler';
import { friendAddMods } from './friendAddHandler';
import { friendPokeMods } from './FriendPokeHandler';
import { groupAdminUpdateMods } from './GroupAdminUpdateHandler';
import { groupBanMods } from './groupBanHandler';
import { groupRecallMods } from './groupRecallHandler';

export const useNoticeMod = (
	mod: Array<
		| GroupRecallModType
		| FriendAddModType
		| ClientStatusUpdateModType
		| GroupBanModType
		| GroupRecallModType
		| FriendPokeModType
		| GroupAdminUpdateModType
	>
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
					break;
				case 'clientStatusUpdateMod':
					clientStatusUpdateMods.push(item);
					break;
				case 'groupBanMod':
					groupBanMods.push(item);
					break;
				case 'friendPokeMod':
					friendPokeMods.push(item);
					break;
				case 'groupAdminUpdateMod':
					groupAdminUpdateMods.push(item);
					break;
			}
		});
		return;
	}
};
