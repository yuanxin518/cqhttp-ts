import { GeneralRequestPost } from '../GeneralPostType';

export type GroupAddRequest = GeneralRequestPost & {
	request_type: 'group';
	/**
	 * 加群请求、邀请登录号入群
	 */
	sub_type: 'add' | 'invite';
	/**
	 * 群号
	 */
	group_id: number;
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
