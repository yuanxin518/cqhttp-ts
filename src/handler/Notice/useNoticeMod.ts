import { GroupRecallModType } from '../../types/Mod/RecallModType';
import { groupRecallMods } from './groupRecallHandler';

export const useNoticeMod = (mod: GroupRecallModType[]) => {
	// 添加处理器
	if (mod instanceof Array) {
		mod.forEach((item) => {
			if (item.handler === undefined) return;
			switch (item.type) {
				case 'groupRecallMod':
					groupRecallMods.push(item);
			}
		});
		return;
	}
};
