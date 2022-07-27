import { GroupRecallModType } from '../../types/Mod/NoticeModType';
import { GroupRecallType } from '../../types/PostNoticeType/GroupMessageRecallType';
import modRun from '../modRun';

export const groupRecallMods: GroupRecallModType[] = [];

export default (notice: GroupRecallType) => {
	modRun(groupRecallMods, notice, notice.group_id);
};
