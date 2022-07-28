/**
 * 获取精华消息列表
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%B2%BE%E5%8D%8E%E6%B6%88%E6%81%AF%E5%88%97%E8%A1%A8
 */
export type GetEssenceMsgListApiType = {
	group_id: number;
};

export type GetEssenceMsgListApiResponseType = {
	sender_id: number;
	sender_nick: string;
	sender_time: number;
	operator_id: number;
	operator_nick: string;
	operator_time: number;
	message_id: number;
}[];
