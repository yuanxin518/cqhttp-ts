import type {
	GeneralEventTypes,
	PostMessageType,
	PostNoticeType,
	PostRequestType,
} from './GeneralEventTypes';
import { MessageSender } from './PostMessageType/MessageSenderType';

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

export type GeneralMessagePost = GeneralPost & {
	post_notice: 'message';
	sub_type: string;
	message_id: number;
	user_id: number;
	message: string;
	raw_message: string;
	font: number;
	sender: MessageSender.Friend | MessageSender.Group;
	/**
	 * 消息的类型
	 */
	message_type: PostMessageType;
};

export type GeneralNoticePost = GeneralPost & {
	post_type: 'notice';
	notice_type: PostNoticeType;
};
export type NotifyTypePost = GeneralNoticePost & {
	sub_type: 'honor' | 'poke' | 'lucky_king';
};

export type GeneralRequestPost = GeneralPost & {
	post_type: 'request';
	request_type: PostRequestType;
};
