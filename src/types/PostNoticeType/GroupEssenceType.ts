import { GeneralNoticePost } from '../GeneralPostType';
/**
 * 精华消息
 */
export type GroupEssenceType = GeneralNoticePost & {
	notice_type: 'essence';
	/**
	 * 添加精华消息、移除精华消息
	 */
	sub_type: 'add' | 'delete';
	/**
	 * 消息发送者id
	 */
	sender_id: number;
	/**
	 * 操作者id
	 */
	operator_id: number;
	/**
	 * 消息id
	 */
	message_id: number;
};
