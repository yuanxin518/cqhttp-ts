import { GroupBanType } from '../../types';
import { GroupMemberIncreaseModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupMemberIncreaseMods: GroupMemberIncreaseModType[] = [];

export default (notice: GroupBanType) => {
	modRun(groupMemberIncreaseMods, notice, notice.group_id);
};
