import { MessageSender } from '../PostMessageType/MessageSenderType';

/**
 * 获取消息
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF
 */
export type GetMessageApiType = {
	message_id: number;
};

export type GetMessageApiResponseType = {
	message_id: number;
	real_id: number;
	sender: MessageSender.Friend | MessageSender.Group;
	time: number;
	message: string;
	raw_message: string;
};
