import { GroupRecallModType } from '../../types/Mod/RecallModType';
import { GroupRecallType } from '../../types/PostNoticeType/GroupRecallType';

export const groupRecallMods: GroupRecallModType[] = [];

export default (notice: GroupRecallType) => {
	groupRecallMods.forEach((n) => {
		if (n.whiteList.includes(notice.group_id)) {
			n.handler(notice);
		}
	});
};
