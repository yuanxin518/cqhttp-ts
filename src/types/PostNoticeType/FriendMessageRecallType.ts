import { GeneralNoticePost } from '../GeneralPostType';

/**
 * 好友消息撤回
 * https://docs.go-cqhttp.org/event/#%E5%A5%BD%E5%8F%8B%E6%B6%88%E6%81%AF%E6%92%A4%E5%9B%9E
 */
export type FriendMessageRecallType = GeneralNoticePost & {
	notice_type: 'friend_recall';
	/**
	 * 好友qq
	 */
	use_id: number;
	/**
	 * 被撤回的消息id
	 */
	message_id: number;
};
