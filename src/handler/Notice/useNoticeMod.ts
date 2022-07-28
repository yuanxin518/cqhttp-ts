import { noticeModStore } from '../../modMonitor';
import {
	ClientStatusUpdateModType,
	FriendAddModType,
	FriendPokeModType,
	GroupAdminUpdateModType,
	GroupBanModType,
	GroupCardUpdateModType,
	GroupEssenceModType,
	GroupHonorUpdateModType,
	GroupLuckyKingModType,
	GroupMemberDecreaseModType,
	GroupMemberIncreaseModType,
	GroupMessageRecallModType,
	GroupPokeModType,
	GroupUploadFileModType,
	ReceiveOfflineFileModType,
} from '../../types/Mod/NoticeModType';
import { clientStatusUpdateMods } from './clientStatusUpdateHandler';
import { friendAddMods } from './friendAddHandler';
import { friendPokeMods } from './friendPokeHandler';
import { groupAdminUpdateMods } from './groupAdminUpdateHandler';
import { groupBanMods } from './groupBanHandler';
import { groupCardUpdateMods } from './groupCardUpdateHandler';
import { groupEssenceMods } from './groupEssenceHandler';
import { groupHonorUpdateMods } from './groupHonorUpdateHandler';
import { groupLuckyKingMods } from './groupLuckyKingHandler';
import { groupMemberDecreaseMods } from './groupMemberDecreaseHandler';
import { groupMemberIncreaseMods } from './groupMemberIncreaseHandler';
import { groupMessageRecallMods } from './groupMessageRecallHandler';
import { groupPokeMods } from './groupPokeHandler';
import { groupUploadFileMods } from './groupUploadFileHandler';
import { receiveOfflineMods } from './receiveOfflineFileHandler';

export const useNoticeMod = (
	mod: Array<
		| FriendAddModType
		| ClientStatusUpdateModType
		| GroupBanModType
		| GroupMessageRecallModType
		| FriendPokeModType
		| GroupAdminUpdateModType
		| GroupCardUpdateModType
		| GroupEssenceModType
		| GroupHonorUpdateModType
		| GroupLuckyKingModType
		| GroupMemberDecreaseModType
		| GroupMemberIncreaseModType
		| GroupPokeModType
		| GroupUploadFileModType
		| ReceiveOfflineFileModType
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
				case 'groupEssenceMod':
					groupEssenceMods.push(item);
					break;
				case 'groupHonorUpdateMod':
					groupHonorUpdateMods.push(item);
					break;
				case 'groupLuckyKingMod':
					groupLuckyKingMods.push(item);
					break;
				case 'groupMemberDecreaseMod':
					groupMemberDecreaseMods.push(item);
					break;
				case 'groupMemberIncreaseMod':
					groupMemberIncreaseMods.push(item);
					break;
				case 'groupPokeMod':
					groupPokeMods.push(item);
					break;
				case 'groupUploadFileMod':
					groupUploadFileMods.push(item);
					break;
				case 'receiveOfflineFileMod':
					receiveOfflineMods.push(item);
					break;
			}
			noticeModStore.push(item);
		});
		return;
	}
};
