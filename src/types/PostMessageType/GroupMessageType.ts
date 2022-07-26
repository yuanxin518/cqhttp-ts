import { MessagePost } from '../GeneralPostType';

/**
 * https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E7%BE%A4%E6%B6%88%E6%81%AF
 */
export type GroupMessageType = MessagePost & {
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 匿名信息
	 */
	anonymous: Object | null;
};
