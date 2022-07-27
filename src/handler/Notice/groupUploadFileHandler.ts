import { GroupBanType } from '../../types';
import { GroupUploadFileModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupUploadFileMods: GroupUploadFileModType[] = [];

export default (notice: GroupBanType) => {
	modRun(groupUploadFileMods, notice, notice.group_id);
};
