import { GroupBanType } from '../../types';
import { ReceiveOfflineFileModType } from '../../types/Mod';
import modRun from '../modRun';

export const receiveOfflineMods: ReceiveOfflineFileModType[] = [];

export default (notice: GroupBanType) => {
	modRun(receiveOfflineMods, notice, notice.group_id);
};
