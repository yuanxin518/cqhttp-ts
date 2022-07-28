type ForwardMessage = {
	content: string;
	sender: {
		nickname: string;
		user_id: number;
	};
	time: number;
};
/**
 * 获取合并转发内容
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E5%86%85%E5%AE%B9
 */
export type GetForwardMessageApiType = {
	message_id: number;
};

export type GetForwardMessageApiResponseType = {
	messages: ForwardMessage[];
};
