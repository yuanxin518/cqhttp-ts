/**
 * https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E7%BE%A4%E6%B6%88%E6%81%AF
 */
export type SendGroupMessageApiType = {
	group_id: number;
	message: string;
	auto_escape?: boolean;
};
export type SendGroupMessageApiResponseType = {
	message_id: number;
};
