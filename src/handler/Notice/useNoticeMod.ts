import {
	ClientStatusUpdateModType,
	FriendAddModType,
	FriendPokeModType,
	GroupAdminUpdateModType,
	GroupBanModType,
	GroupCardUpdateModType,
	GroupMessageRecallModType,
} from '../../types/Mod/NoticeModType';
import { clientStatusUpdateMods } from './clientStatusUpdateHandler';
import { friendAddMods } from './friendAddHandler';
import { friendPokeMods } from './friendPokeHandler';
import { groupAdminUpdateMods } from './groupAdminUpdateHandler';
import { groupBanMods } from './groupBanHandler';
import { groupCardUpdateMods } from './GroupCardUpdateHandler';
import { groupMessageRecallMods } from './groupMessageRecallHandler';

export const useNoticeMod = (
	mod: Array<
		| FriendAddModType
		| ClientStatusUpdateModType
		| GroupBanModType
		| GroupMessageRecallModType
		| FriendPokeModType
		| GroupAdminUpdateModType
		| GroupCardUpdateModType
	>
) => {
	// 添加处理器
	if (mod instanceof Array) {
		mod.forEach((item) => {
			if (item.handler === undefined) return;
			switch (item.type) {
				case 'groupMessageRecallMod':
					groupMessageRecallMods.push(item);
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
				case 'groupCardUpdateMod':
					groupCardUpdateMods.push(item);
					break;
			}
		});
		return;
	}
};
