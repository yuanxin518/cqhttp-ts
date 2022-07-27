import { GroupBanType } from '../../types';
import {  GroupHonorUpdateModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupHonorUpdateMods: GroupHonorUpdateModType[] = [];

export default (notice: GroupBanType) => {
	modRun(groupHonorUpdateMods, notice, notice.group_id);
};
