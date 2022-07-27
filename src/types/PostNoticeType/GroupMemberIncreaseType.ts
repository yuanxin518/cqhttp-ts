import { GeneralNoticePost } from '../GeneralPostType';

/**
 * 群成员增加
 * https://docs.go-cqhttp.org/event/#%E7%BE%A4%E6%88%90%E5%91%98%E5%A2%9E%E5%8A%A0
 */
export type GroupMemberIncreaseType = GeneralNoticePost & {
	notice_type: 'group_increase';
	/**
	 * 管理员已同意入群、管理员邀请入群
	 */
	sub_type: 'approve' | 'invite';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 操作者qq
	 */
	operator_id: number;
	/**
	 * 加入者qq
	 */
	user_id: number;
};
