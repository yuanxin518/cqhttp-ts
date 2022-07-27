import { GeneralMessagePost } from '../GeneralPostType';

/**
 * https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E7%BE%A4%E6%B6%88%E6%81%AF
 */
export type GroupMessageType = GeneralMessagePost & {
	sub_type: 'normal' | 'anonymous' | 'notice';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 匿名信息
	 */
	anonymous: Object | null;
	/**
	 * 快速回复
	 */
	reply: (
		replyMessage: string | number,
		isAt?: boolean,
		// 撤销这条消息
		isDelete?: boolean,
		/**
		 * 发送者踢出群聊
		 */
		isKick?: boolean,
		ban?: {
			isBan: boolean;
			ban_duration: number;
		},
		autoEscape?: boolean
	) => void;
};
