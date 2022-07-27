import { GeneralRequestPost } from '../GeneralPostType';
/**
 * 收到好友请求
 */
export type FriendAddRequestType = GeneralRequestPost & {
	request_type: 'friend';
	/**
	 * 发送请求的qq
	 */
	user_id: number;
	/**
	 * 验证消息
	 */
	comment: string;
	/**
	 * 请求 flag, 在调用处理请求的 API 时需要传入
	 */
	flag: string;
};
