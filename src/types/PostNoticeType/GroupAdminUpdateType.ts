import { GeneralNoticePost } from '../GeneralPostType';

/**
 * 群管理员变动
 * https://docs.go-cqhttp.org/event/#%E7%BE%A4%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%98%E5%8A%A8
 */
export type GroupAdminUpdateType = GeneralNoticePost & {
	notice_type: 'group_admin';
	/**
	 * 设置 或 取消设置管理员
	 */
	sub_type: 'set' | 'unset';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 管理员qq
	 */
	user_id: number;
};
