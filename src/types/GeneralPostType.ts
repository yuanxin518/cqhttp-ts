import type {
	GeneralEventTypes,
	PostMessageType,
	PostNoticeType,
} from './GeneralEventTypes';
import { MessageSenderType } from './PostMessageType/MessageSenderType';

export type GeneralPost = {
	/**
	 * 事件发生的时间戳
	 */
	time: number;
	/**
	 * 收到机器人的qq
	 */
	self_id: number;
	/**
	 * 上报的类型
	 */
	post_type: GeneralEventTypes;
	/**
	 * 绑定属性
	 */
};

export type MessagePost = GeneralPost & {
	sub_type: string;
	message_id: number;
	user_id: number;
	message: string;
	raw_message: string;
	font: number;
	sender: MessageSenderType;
	/**
	 * 消息的类型
	 */
	message_type: PostMessageType;
};

export type GeneralNoticePost = GeneralPost & {
	notice_type: PostNoticeType;
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
