/**
 * https://docs.go-cqhttp.org/cqcode/#%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E6%B6%88%E6%81%AF%E8%8A%82%E7%82%B9
 */
type ForwardNode = {
	id: number;
	name: string;
	/**
	 * 发送者qq
	 */
	uin: number;
	content: string;
	seq: string;
};
/**
 * https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91-%E7%BE%A4
 */
export type SendGroupForwardMessageApiType = {
	group_id: number;
	message: ForwardNode[];
};
export type SendGroupForwardMessageApiResponseType = {};
