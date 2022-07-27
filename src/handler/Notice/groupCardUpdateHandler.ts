import { GroupBanType } from '../../types';
import { GroupCardUpdateModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupCardUpdateMods: GroupCardUpdateModType[] = [];

export default (notice: GroupBanType) => {
	modRun(groupCardUpdateMods, notice, notice.group_id);
};
