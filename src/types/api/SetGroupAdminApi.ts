/**
 * 群组设置管理员
 * https://docs.go-cqhttp.org/api/#%E7%BE%A4%E7%BB%84%E8%AE%BE%E7%BD%AE%E7%AE%A1%E7%90%86%E5%91%98
 */
export type SetGroupAdminApiType = {
	group_ip: number;
	user_id: number;
	/**
	 * true为设置，false为取消
	 */
	enable?: boolean;
};
export type SetGroupAdminApiResponseType = {};
