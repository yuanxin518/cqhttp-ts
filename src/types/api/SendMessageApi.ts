/**
 * 发送消息
 * https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF
 */
export type SendMessageApiType = {
	/**
	 * 消息类型, 支持 private、group , 分别对应私聊、群组, 如不传入, 则根据传入的 *_id 参数判断
	 */
	message_type?: 'private' | 'group ';
	/**
	 * 对方 QQ 号 ( 消息类型为 private 时需要 )
	 */
	user_id?: number;
	/**
	 * 群号 ( 消息类型为 group 时需要 )
	 */
	group_id: number;
	message: string;
	auto_escape?: boolean;
};

export type SendMessageApiResponseType = {
	message_id: number;
};
