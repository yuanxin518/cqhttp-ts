/**
 * https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E7%A7%81%E8%81%8A%E6%B6%88%E6%81%AF
 */
export type SendPrivateMessageType = {
	user_id: number;
	message: string;
	group_id?: number;
	auto_escape?: boolean;
};
export type SendPrivateMessageResponseType = {
	message_id: number;
};
