/**
 * 设置群备注
 */
export type SetGroupCardApiType = {
	group_id: number;
	user_id: number;
	/**
	 * 不填或者空字符串表示删除群名片
	 */
	card?: string;
};
export type SetGroupCardApiResponseType = {};
