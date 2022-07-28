/**
 * 获取群历史消息
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%B6%88%E6%81%AF%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95
 */
export type GetGroupMsgHistoryApiType = {
	message_seq: number;
	group_id: number;
};
export type GetGroupMsgHistoryApiResponseType = {
	message: string[];
};
