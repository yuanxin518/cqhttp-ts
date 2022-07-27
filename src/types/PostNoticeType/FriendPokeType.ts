import { GeneralNoticePost } from '../GeneralPostType';

/**
 * https://docs.go-cqhttp.org/event/#%E5%A5%BD%E5%8F%8B%E6%88%B3%E4%B8%80%E6%88%B3
 * 好友戳一戳
 */
export type FriendPokeType = GeneralNoticePost & {
	notice_type: 'notify';
	/**
	 * 戳一戳
	 */
	sub_type: 'poke';
	/**
	 * 发送者qq
	 */
	sender_id: number;
	/**
	 * 发送者qq
	 */
	user_id: number;
	/**
	 * 被戳者qq
	 */
	target_id: number;
};
