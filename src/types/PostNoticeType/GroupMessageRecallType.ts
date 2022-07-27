import { GeneralNoticePost } from '../GeneralPostType';

/**
 * 群消息撤回
 * https://docs.go-cqhttp.org/event/#%E7%BE%A4%E6%B6%88%E6%81%AF%E6%92%A4%E5%9B%9E
 */
export type GroupMessageRecallType = GeneralNoticePost & {
	notice_type: 'group_recall';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 消息发送者QQ
	 */
	user_id: number;
	/**
	 * 操作人QQ
	 */
	operator_id: number;
	/**
	 * 被撤回的消息的id
	 */
	message_id: number;
};
