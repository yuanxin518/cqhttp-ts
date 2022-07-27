/**
 * https://docs.go-cqhttp.org/event/#%E7%BE%A4%E7%A6%81%E8%A8%80
 */
export type GroupBanType = {
	notice_type: 'group_ban';
	/**
	 * 禁言、解除禁言
	 */
	sub_type: 'ban' | 'lift_ban';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 操作者qq
	 */
	operator_id: number;
	/**
	 * 被禁言qq
	 */
	user_id: number;
	/**
	 * 禁言时长 秒
	 */
	duration: number;
};
