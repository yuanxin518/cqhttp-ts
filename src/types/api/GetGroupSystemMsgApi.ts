type InvitedRequest = {
	/**
	 * 请求id
	 */
	request_id: number;
	/**
	 * 邀请者
	 */
	invitor_uin: number;
	/**
	 * 邀请者昵称
	 */
	invitor_nick: string;
	group_id: number;
	group_name: string;
	/**
	 * 是否已经被处理
	 */
	checked: boolean;
	/**
	 * 处理者  未处理为0
	 */
	actor: number;
};
type JoinRequest = {
	/**
	 * 请求id
	 */
	request_id: number;
	/**
	 * 邀请者
	 */
	invitor_uin: number;
	/**
	 * 邀请者昵称
	 */
	invitor_nick: string;
	group_id: number;
	group_name: string;
	/**
	 * 是否已经被处理
	 */
	checked: boolean;
	/**
	 * 处理者  未处理为0
	 */
	actor: number;
};
/**
 * 获取群系统消息
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E7%B3%BB%E7%BB%9F%E6%B6%88%E6%81%AF
 */
export type GetGroupSystemMsgApiType = {};

export type GetGroupSystemMsgApiResponseType = {
	invited_requests: InvitedRequest[];
	join_requests: JoinRequest[];
} | null;
