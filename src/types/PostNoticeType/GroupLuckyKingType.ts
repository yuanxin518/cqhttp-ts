import { GeneralNoticePost } from '../GeneralPostType';

export type GroupLuckyKingType = GeneralNoticePost & {
	notice_type: 'notify';
	sub_type: 'lucky_king';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 红包发送者qq
	 */
	user_id: number;
	/**
	 * 运气王qq
	 */
	target_id: number;
};
