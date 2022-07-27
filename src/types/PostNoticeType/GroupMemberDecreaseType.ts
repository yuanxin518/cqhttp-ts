import { GeneralNoticePost } from '../GeneralPostType';

/**
 * 群成员减少
 * https://docs.go-cqhttp.org/event/#%E7%BE%A4%E6%88%90%E5%91%98%E5%87%8F%E5%B0%91
 */
export type GroupMemberDecreaseType = GeneralNoticePost & {
	notice_type: 'group_decrease';
	/**
	 * 主动退群、成员被踢、自己被踢
	 */
	sub_type: 'leave' | 'kick' | 'kick_me';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 操作者qq 如果是主动退群，则和use_id相等
	 */
	operator_id: number;
	/**
	 * 离开号qq
	 */
	user_id: number;
};
