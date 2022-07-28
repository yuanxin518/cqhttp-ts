/**
 * 匿名消息对象
 */
export type Anonymous = {
	id: number;
	name: string;
	flase: string;
};

/**
 * 合并消息转发节点
 */
export type ForwardNode = {
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
 * 合并转发消息内容
 */
export type ForwardMessage = {
	content: string;
	sender: {
		nickname: string;
		user_id: number;
	};
	time: number;
};
