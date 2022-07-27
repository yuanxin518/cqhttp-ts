import type { GeneralEventTypes } from './GeneralEventTypes';
import { MessageSenderType } from './MessageType/MessageSenderType';

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
	message_type: 'group' | 'private';
	/**
	 * 快速回复
	 */
	reply: (replyMessage: string | number, autoEscape?: boolean) => void;
};
