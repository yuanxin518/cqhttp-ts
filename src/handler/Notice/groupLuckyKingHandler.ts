import { GroupBanType } from '../../types';
import { GroupLuckyKingModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupLuckyKingMods: GroupLuckyKingModType[] = [];

export default (notice: GroupBanType) => {
	modRun(groupLuckyKingMods, notice, notice.group_id);
};
