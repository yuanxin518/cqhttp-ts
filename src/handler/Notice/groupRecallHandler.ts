import { GroupRecallModType } from '../../types/Mod/NoticeModType';
import { GroupRecallType } from '../../types/PostNoticeType/GroupMessageRecallType';

export const groupRecallMods: GroupRecallModType[] = [];

export default (notice: GroupRecallType) => {
	groupRecallMods.forEach((n) => {
		/**
		 * 白名单为false，则不设置白名单
		 */
		if (typeof n.whiteList === 'boolean') {
			n.handler(notice);
			return;
		}
		if (n.whiteList.includes(notice.group_id)) {
			n.handler(notice);
		}
	});
};
