import { GroupBanType } from '../../types';
import { GroupMemberDecreaseModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupMemberDecreaseMods: GroupMemberDecreaseModType[] = [];

export default (notice: GroupBanType) => {
	modRun(groupMemberDecreaseMods, notice, notice.group_id);
};
