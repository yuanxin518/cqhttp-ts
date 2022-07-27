import { GroupBanType } from '../../types';
import { GroupEssenceModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupEssenceMods: GroupEssenceModType[] = [];

export default (notice: GroupBanType) => {
	modRun(groupEssenceMods, notice, notice.group_id);
};
