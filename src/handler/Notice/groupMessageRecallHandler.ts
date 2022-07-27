import { GroupMessageRecallModType } from '../../types/Mod';
import { GroupMessageRecallType } from '../../types/PostNoticeType/GroupMessageRecallType';
import modRun from '../modRun';

export const groupMessageRecallMods: GroupMessageRecallModType[] = [];

export default (notice: GroupMessageRecallType) => {
	modRun(groupMessageRecallMods, notice, notice.group_id);
};
