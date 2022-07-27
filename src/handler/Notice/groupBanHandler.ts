import { GroupBanType } from '../../types';
import { GroupBanModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupBanMods: GroupBanModType[] = [];

export default (notice: GroupBanType) => {
	modRun(groupBanMods, notice, notice.group_id);
};
