import { GeneralNoticePost } from '../GeneralPostType';

export type GroupRecallType = GeneralNoticePost & {
	notice_type: 'group_recall';
};
