import { GeneralNoticePost } from '../GeneralPostType';

/**
 * 好友添加
 * https://docs.go-cqhttp.org/event/#%E5%A5%BD%E5%8F%8B%E6%B7%BB%E5%8A%A0
 */
export type FriendAddType = GeneralNoticePost & {
	notice_type: 'friend_add';
	/**
	 * 新添加好友的qq
	 */
	user_id: number;
};
